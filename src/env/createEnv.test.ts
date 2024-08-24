import { describe, it } from "node:test";
import assert from "node:assert";
import { defineEnv } from "./defineEnv.ts";

describe("defineEnv", () => {
    it("throws an error when a required environment variable is missing", () => {
        assert.throws(() =>
            defineEnv({
                TEST_ENV: {
                    value: undefined,
                    required: true
                }
            })
        );
    });

    it("throw an error when a required and value is empty string", () => {
        assert.throws(() =>
            defineEnv({
                TEST_ENV: {
                    value: "",
                    required: true
                }
            })
        );
    });

    it("returns the correct value when all required environment variables are present", () => {
        const result = defineEnv({
            TEST_ENV: {
                value: "test",
                required: true
            }
        });
        assert.deepStrictEqual(result, { TEST_ENV: "test" });
    });

    it("returns the default value when a required environment variable is missing", () => {
        const result = defineEnv({
            TEST_ENV: {
                value: undefined,
                required: true,
                defaultValue: "default"
            }
        });
        assert.deepStrictEqual(result, { TEST_ENV: "default" });
    });

    it("snapshot tests", () => {
        const result = defineEnv({
            value_is_a: {
                value: "a",
                required: true,
                defaultValue: "default"
            },
            value_is_default: {
                value: undefined,
                required: true,
                defaultValue: "default"
            },
            value_is_undefined: {
                value: undefined,
                required: false
            },
            value_is_empty_string: {
                value: "",
                required: false
            }
        });
        assert.deepStrictEqual(result, {
            value_is_a: "a",
            value_is_default: "default",
            value_is_empty_string: undefined,
            value_is_undefined: undefined
        });
    });
});
