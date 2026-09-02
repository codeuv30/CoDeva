import "dotenv/config";

if(!process.env.PORT) {
    throw new Error("PORT is not defined is environmental variables.")
}

const CONFIG = {
    PORT: process.env.PORT
}

export default CONFIG;