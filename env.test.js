import { setEnv } from "./src/env/setEnv.js";

// set envs
setEnv({
    LOCALHOST_URL: "http://localhost:3500",
    IS_TEST_MODE: "true"
});
