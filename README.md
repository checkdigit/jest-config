# jest-config

[![MIT License](https://img.shields.io/github/license/checkdigit/jest-config)](https://github.com/checkdigit/jest-config/blob/master/LICENSE.txt)

Copyright (c) 2023 [Check Digit, LLC](https://checkdigit.com)

Check Digit [Jest](https://jestjs.io/) presets and configuration.

### Install

```bash
$ npm i @checkdigit/jest-config --save-dev
```

Note that `@checkdigit/jest-config` automatically brings in the correct versions of
`jest`, `ts-jest`,`@types/jest` and `env` via `peerDependencies`. Do not install these packages separately.

#### Automatic ESM detection

`@checkdigit/jest-config` will automatically detect whether your project is using ESM or CommonJS modules and configure
Jest accordingly. If you are using ESM modules, you must have `"type": "module"` in your `package.json` file.

Note that the `--experimental-vm-modules` flag is required for ESM modules. See the
[Jest docs](https://jestjs.io/docs/ecmascript-modules) for more information.

### Examples

#### CommonJS `package.json`

```jsonc
{
  // ...
  "scripts": {
    "test": "npm run jest"
  }
  // ...
  "jest": {
    "preset": "@checkdigit/jest-config"
  }
}
```

#### ESM `package.json`

```jsonc
{
  // ...
  "type": "module",
  "scripts": {
    "test": "NODE_OPTIONS=\"--experimental-vm-modules\" jest"
  }
  // ...
  "jest": {
    "preset": "@checkdigit/jest-config"
  }
}
```

## License

MIT
