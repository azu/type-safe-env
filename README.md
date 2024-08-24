# type-safe-env snippets for Node.js

Type Safe env snippets for Node.js

## Usage

### Defined Environment variables type

- [defineEnv.ts](./src/env/defineEnv.ts): Define Environment variables Utility
- [env.ts](./src/env/env.ts): Defined environment variables for application

`defineEnv` function define environment variables type.

You can define environment variables with `defineEnv` function.

```ts
import { defineEnv } from "./defineEnv";

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
    },
    /**
     * Optional value
     */
    OPTIONAL_VALUE: {
        value: process.env["OPTIONAL_VALUE"],
        required: false,
    }
});
```

Also, You can refer to the defined environment variables by importing `env` variable.

```ts
// use env
import { env } from "../env/env";
// type-safe
console.log("localhost url", env.LOCALHOST_URL);
console.log("Is Test Mode", env.IS_TEST_MODE);
console.log("OPTIONAL_VALUE", env.OPTIONAL_VALUE); // string or undefined   
```

### Set Environment variables for application process

- [setEnv.js](./src/env/setEnv.js): Set Environment variables Utility
- [env.local.js](./env.local.js): Set Environment variables for local development
- [env.test.js](./env.test.js): Set Environment variables for test

You can set environment variables with `setEnv` function.

e.g. set local development environment variables

```ts
import { setEnv } from "./src/env/setEnv";

// set envs
setEnv({
    LOCALHOST_URL: "http://localhost:3500",
    IS_TEST_MODE: "false"
});
```

If you want to set environment variables to the process, you can use `NODE_OPTIONS` to import `env.local.js` or `env.test.js`.

e.g. Run development server with `env.local.js`

```bash
NODE_OPTIONS='--import ./env.local.js' npm run dev
```

e.g. Run test with `env.test.js`

```bash
NODE_OPTIONS='--import ./env.test.js' npm test
```

## FAQ

### Why use `env.*.js` instead of `.env`?

`.env` file is not type-safe.
`env.*.js` is type-safe because it is type-checked by TypeScript's [checkJs](https://www.typescriptlang.org/tsconfig/#checkJs) feature..

Node.js support `.env` file via `--env-file` flag.

- [`--env-file`](https://nodejs.org/api/cli.html#--env-fileconfig)
- [Node.js — How to read environment variables from Node.js](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)

However, `NODE_OPTIONS="--env-file=.env"` is not allowed.

- [Node 20.6+ `--env-file` flag in `NODE_OPTIONS` is not allowed · Issue #1096 · cypress-io/github-action](https://github.com/cypress-io/github-action/issues/1096)`

### Why not use `env.*.ts` instead of `env.*.js`?

Node.js [--experimental-strip-types](https://nodejs.org/en/blog/release/v22.6.0) is experimental feature yet.

### Why use `NODE_OPTIONS` instead of just use `--import` flag?

Some package manager like `pnpm` install package bin as shell script.

For example, pnpm install package's bin as `node_modules/.bin/vite` which is shell script.
So, We can't run the `vite` command via `node` command.

```bash
node --import ./env.local.js node_modules/.bin/vite
# Throws error
```

[NODE_OPTIONS=options](https://nodejs.org/docs/latest/api/cli.html#node_optionsoptions) allow to pass options to the Node.js process.

```bash
NODE_OPTIONS='--import ./env.local.js' node node_modules/.bin/vite
# That works
```

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/type-safe-env/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
