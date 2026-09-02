import Redis from "ioredis";
import CONFIG from "../config/config.js"

const redis = new Redis({
    port: CONFIG.REDIS_PORT, // Redis port
    host: CONFIG.REDIS_HOST, // Redis host
    username: CONFIG.REDIS_USERNAME, // needs Redis >= 6
    password: CONFIG.REDIS_PASSWORD,
});

redis.on("connect", () => {
    console.log("Successfully Connected to Redis");
});

redis.on("error", (error) => {
    throw error;
});

export default redis;