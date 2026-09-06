import { Router } from "express";
import passport from "passport";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import CONFIG from "../config/config.js";
import redis from "../config/redis.js";
import crypto from "crypto";
import { authorizeUser } from "../middlewares/auth.middleware.js";

const authRouter = Router();

/**
 * @route   GET /api/v1/auth/github
 * @access  Public
 * @desc    Initiates GitHub OAuth authentication
 */
authRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"], session: false, prompt: 'select_account' }),
);

/**
 * @route   GET /api/v1/auth/github/callback
 * @access  Public
 * @desc    Handles the GitHub OAuth callback, logs in an existing user,
 *          or creates a temporary token for a new user to choose a username
 */
authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
  async function (req, res) {
    const profile = req.user.profile;

    const existingUser = await userModel.findOne({ github_id: profile.id });

    if (existingUser) {
      const accessToken = jwt.sign(
        {
          userId: existingUser._id,
          github_id: profile.id,
        },
        CONFIG.JWT_SECRET,
        { expiresIn: "7d" },
      );

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        secure: CONFIG.NODE_ENV === "production" ? true : false,
        sameSite: "lax",
        signed: true,
      });

      return res.status(200).json({
        success: true,
        message: "Successfully LoggedIn",
      });
    }

    const userDetails = {
      role: "user",
      avatar_url: profile.photos[0].value,
      github_id: profile.id,
      github_username: profile.username,
      github_access_token: req.user.githubAccessToken,
    };

    const key = crypto.randomBytes(32).toString("hex");

    res.cookie("temporaryToken", key, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
      secure: CONFIG.NODE_ENV === "production" ? true : false,
      sameSite: "lax",
      signed: true,
    });

    await redis.set(key, JSON.stringify(userDetails), "EX", 6 * 60); // 5mins

    return res.status(200).json({
      success: true,
      message: "Successfully Registered",
    });
  },
);

/**
 * @route   POST /api/v1/auth/choose-username
 * @access  Public
 * @desc    Creates a new user after GitHub authentication using the
 *          username provided by the user
 *
 * @body    {
 *            username: String
 *          }
 */
authRouter.post("/choose-username", async (req, res) => {
  const temporaryToken = req.signedCookies.temporaryToken;
  const username = req.body.username;

  if (!username)
    return res.status(400).json({
      success: false,
      message: "Username is required",
    });

  if (!temporaryToken) {
    return res.status(400).json({
      success: false,
      message:
        "You took too long to choose a username. Please sign in with GitHub again to start over.",
    });
  }

  const userDetails = JSON.parse(await redis.get(temporaryToken));

  if (!userDetails) {
    return res.status(400).json({
      success: false,
      message:
        "You took too long to choose a username. Please sign in with GitHub again to start over.",
    });
  }

  redis.del(temporaryToken);
  res.clearCookie("temporaryToken");

  const user = await userModel.create({
    ...userDetails,
    username,
  });

  const accessToken = jwt.sign(
    {
      userId: user._id,
      github_id: user.github_id,
    },
    CONFIG.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    secure: CONFIG.NODE_ENV === "production" ? true : false,
    sameSite: "lax",
    signed: true,
  });

  return res.status(200).json({
    success: true,
    message: "User Registered Successfully.",
  });
});

/**
 * @route   GET /api/v1/auth/me
 * @access  Private
 * @desc    Fetches the currently authenticated user's information
 */
authRouter.get("/me", authorizeUser, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User fetched sucessfully",
    user: req.user,
  });
});

export default authRouter;
