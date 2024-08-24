export type BaseEnvRecord = Record<
    string,
    {
        value: string | undefined;
        required: boolean;
        defaultValue?: string;
    }
>;
export type ReturnTypeOfDefineEnv<T extends BaseEnvRecord> = {
    // If the value is required, it should be a string, otherwise it should be a string or undefined
    [K in keyof T]: T[K]["required"] extends true ? string : string | undefined;
};

/**
 * Define environment variables and create them
 * @param envs
 */
export const defineEnv = <T extends BaseEnvRecord>(envs: T): ReturnTypeOfDefineEnv<T> => {
    const result = new Map<string, string | undefined>();
    Object.entries(envs).forEach(([key, { value, required, defaultValue }]) => {
        if (required && !value && !defaultValue) {
            throw new Error(
                `Missing required environment variable: ${key}, value: ${value === undefined ? "undefined" : `"${value}"`}`
            );
        }
        result.set(key, value || defaultValue);
    });
    return Object.fromEntries(result) as ReturnTypeOfDefineEnv<T>;
};
