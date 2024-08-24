import { defineEnv } from "./defineEnv.ts";

// Define environment variables
export const env = defineEnv({
    /**
     * Localhost URL
     */
    LOCALHOST_URL: {
        value: process.env["LOCALHOST_URL"],
        required: true,
        defaultValue: "http://localhost:3000"
    },
    /**
     * Is test mode?
     */
    IS_TEST_MODE: {
        value: process.env["IS_TEST_MODE"],
        required: true,
        defaultValue: "false"
    }
});
