// use env
import { env } from "../env/env.ts";

console.log("localhost url", env.LOCALHOST_URL);
console.log("Is Test Mode", env.IS_TEST_MODE);
