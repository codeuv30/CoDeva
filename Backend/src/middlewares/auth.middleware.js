import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import CONFIG from "../config/config.js";
import redis from "../config/redis.js";

export const authorizeUser = async (req, res, next) => {
  try {
    const accessToken = req.signedCookies.accessToken;

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "You are not logged in. Please log in to continue.",
      });
    }

    let decoded;

    try {
      decoded = jwt.verify(accessToken, CONFIG.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "You are not logged in. Please log in to continue.",
      });
    }

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "You are not logged in. Please log in to continue.",
      });
    }

    let user = JSON.parse(await redis.get(`user-${decoded.userId}`));

    if (!user) {
      user = await userModel.findById(decoded.userId);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "You are not logged in. Please log in to continue.",
        });
      }

      redis.set(`user-${user._id}`, JSON.stringify(user));
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again or contact us.",
    });
  }
};
