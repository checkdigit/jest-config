# jest-config

[![MIT License](https://img.shields.io/github/license/checkdigit/jest-config)](https://github.com/checkdigit/jest-config/blob/master/LICENSE.txt)

Copyright (c) 2022 [Check Digit, LLC](https://checkdigit.com)

Check Digit [Jest](https://jestjs.io/) presets and configuration.

### Install

```bash
$ npm i @checkdigit/jest-config --save-dev
```

Note that `@checkdigit/jest-config` automatically brings in the correct versions of
`jest`, `ts-jest`,`@types/jest` and `env` via `peerDependencies`. Do not install these packages separately.

### Example `package.json`

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

## License

MIT
