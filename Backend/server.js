import app from "./src/app.js";
import CONFIG from "./src/config/config.js";

const PORT = CONFIG.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});