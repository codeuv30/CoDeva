import "dotenv/config";

if(!process.env.PORT) {
    throw new Error("PORT is not defined is environmental variables.")
}

if(!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined is environmental variables.")
}

if(!process.env.GITHUB_CLIENT_ID) {
    throw new Error("GITHUB_CLIENT_ID is not defined is environmental variables.")
}

if(!process.env.GITHUB_CLIENT_SECRET) {
    throw new Error("GITHUB_CLIENT_SECRET is not defined is environmental variables.")
}

if(!process.env.CALLBACK_URL) {
    throw new Error("CALLBACK_URL is not defined is environmental variables.")
}

if(!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined is environmental variables.")
}

if(!process.env.REDIS_USERNAME) {
    throw new Error("REDIS_USERNAME is not defined is environmental variables.")
}

if(!process.env.REDIS_PASSWORD) {
    throw new Error("REDIS_PASSWORD is not defined is environmental variables.")
}

if(!process.env.REDIS_HOST) {
    throw new Error("REDIS_HOST is not defined is environmental variables.")
}

if(!process.env.REDIS_PORT) {
    throw new Error("REDIS_PORT is not defined is environmental variables.")
}

if(!process.env.NODE_ENV) {
    throw new Error("NODE_ENV is not defined is environmental variables.")
}

if(!process.env.COOKIE_SECRET) {
    throw new Error("COOKIE_SECRET is not defined is environmental variables.")
}

const CONFIG = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    CALLBACK_URL: process.env.CALLBACK_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_USERNAME: process.env.REDIS_USERNAME,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    NODE_ENV: process.env.NODE_ENV,
    COOKIE_SECRET: process.env.COOKIE_SECRET
}

export default CONFIG;