import process from "node:process";

/**
 * set env util
 * @param {Partial<typeof import("./env").env>} env
 */
export const setEnv = (env) => {
    if (process.env["PRINT_ENV"] === "true") {
        console.table(env);
    }
    Object.entries(env).forEach(([key, value]) => {
        process.env[key] = value;
    });
};
