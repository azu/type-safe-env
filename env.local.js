import { setEnv } from "./src/env/setEnv.js";

// Set Environment Variables
setEnv({
    LOCALHOST_URL: "http://localhost:3500",
    IS_TEST_MODE: "false"
});
