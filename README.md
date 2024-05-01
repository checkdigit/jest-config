# jest-config

[![MIT License](https://img.shields.io/github/license/checkdigit/jest-config)](https://github.com/checkdigit/jest-config/blob/master/LICENSE.txt)

Copyright (c) 2023–2024 [Check Digit, LLC](https://checkdigit.com)

Check Digit [Jest](https://jestjs.io/) presets and configuration.

### Install

```bash
$ npm i @checkdigit/jest-config --save-dev
```

Note that `@checkdigit/jest-config` automatically brings in the correct versions of
`jest`, `ts-jest` and `@jest/globals` via `peerDependencies`. Do not install these packages separately.

#### ESM

**`@checkdigit/jest-config` is now ESM only.**

It only supports testing with ESM modules,
i.e., you must have `"type": "module"` in your `package.json` file.

Note that the Node `--experimental-vm-modules` flag is required for ESM modules. See the
[Jest docs](https://jestjs.io/docs/ecmascript-modules) for more information.

#### .env

The .env file is automatically loaded via `process.loadEnvFile()` (available in Node 20.12+).

### Example

#### ESM `package.json`

Note: this requires NodeJS v20.11 or later.

```jsonc
{
  // ...
  "type": "module",
  "scripts": {
    "test": "NODE_OPTIONS=\"--disable-warning ExperimentalWarning --experimental-vm-modules\" jest --coverage=false"
    "test:coverage": "NODE_OPTIONS=\"--disable-warning ExperimentalWarning --experimental-vm-modules\" jest --coverage=true"
  }
  // ...
  "jest": {
    "preset": "@checkdigit/jest-config"
  }
}
```

## License

MIT
