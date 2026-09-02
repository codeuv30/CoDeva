import app from "./src/app.js";
import CONFIG from "./src/config/config.js";
import connectToDB from "./src/config/db.js";
import userModel from "./src/models/user.model.js";
import redis from "./src/config/redis.js";

const PORT = CONFIG.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    connectToDB();
});