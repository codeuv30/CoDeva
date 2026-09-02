import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import CONFIG from "./config.js";

passport.use(new GitHubStrategy({
    clientID: CONFIG.GITHUB_CLIENT_ID,
    clientSecret: CONFIG.GITHUB_CLIENT_SECRET,
    callbackURL: CONFIG.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, {
        profile,
        githubAccessToken: accessToken
    });w
  }
));