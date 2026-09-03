import request from "supertest";
import app from "../src/app.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import userModel from "../src/models/user.model.js";
import CONFIG from "../src/config/config.js";
import redis from "../src/config/redis.js";
import connectToDB from "../src/config/db.js";
import cookieSignature from "cookie-signature";

beforeAll(async () => {
  await connectToDB();
});

afterAll(async () => {
  await mongoose.connection.close();
  await redis.quit();
});

describe("GET /me", () => {
  test("should return 401 if user is not logged in", async () => {
    const response = await request(app).get("/api/v1/auth/me");

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
  });

  test("should return 401 if access token is invalid", async () => {
    const response = await request(app)
      .get("/api/v1/auth/me")
      .set("Cookie", "accessToken=invalid-token");

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
  });

  test("should return 401 if access token is expired", async () => {
    const expiredToken = jwt.sign(
      { userId: new mongoose.Types.ObjectId().toString() },
      CONFIG.JWT_SECRET,
      { expiresIn: "-1s" },
    );

    const response = await request(app)
      .get("/api/v1/auth/me")
      .set("Cookie", `accessToken=${expiredToken}`);

    expect(response.statusCode).toBe(401);

    expect(response.body).toEqual({
      success: false,
      message: "You are not logged in. Please log in to continue.",
    });
  });

  test("should return 401 if user in JWT does not exist", async () => {
    const fakeUserId = new mongoose.Types.ObjectId();

    const token = jwt.sign(
      { userId: fakeUserId.toString() },
      CONFIG.JWT_SECRET,
      { expiresIn: "7d" },
    );

    const response = await request(app)
      .get("/api/v1/auth/me")
      .set("Cookie", `accessToken=${token}`);

    expect(response.statusCode).toBe(401);

    expect(response.body).toEqual({
      success: false,
      message: "You are not logged in. Please log in to continue.",
    });
  });

  test("should return 200 and return user if token is valid", async () => {
    const user = await userModel.create({
      username: "Test User",
      role: "user",
      github_access_token: "fugdfgdfg-sdfjdgdfg",
      avatar_url: "https://example.com/avatar.png",
      github_id: "test-github-id",
      github_username: "test-user",
    });

    const token = jwt.sign({ userId: user._id.toString() }, CONFIG.JWT_SECRET, {
      expiresIn: "7d",
    });

    const signedToken = `s:${cookieSignature.sign(token, CONFIG.COOKIE_SECRET)}`;

    const response = await request(app)
      .get("/api/v1/auth/me")
      .set("Cookie", `accessToken=${signedToken}`);

    expect(response.statusCode).toBe(200);

    expect(response.body).toMatchObject({
      success: true,
      message: "User fetched sucessfully",
      user: {
        _id: user._id.toString(),
        username: "Test User",
        role: "user",
        github_id: "test-github-id",
        github_username: "test-user",
      },
    });

    await userModel.deleteOne({ _id: user._id });
  });
});