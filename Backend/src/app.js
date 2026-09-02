import express from "express";
import passport from "passport";
import "../src/config/passport.js"
import CONFIG from "./config/config.js";

const app = express();

/* Essential Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(CONFIG.COOKIE_SECRET));
app.use(passport.initialize());

/* Import Routes */
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

/* Using Routes */
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
    return res.status(200).json(req.user);
});

export default app;