// jest-preset.js

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires,unicorn/prefer-module
const path = require('node:path');
// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires,unicorn/prefer-module
const fs = require('node:fs');
// eslint-disable-next-line no-sync,@typescript-eslint/no-unsafe-assignment
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const useESM = packageJson.type === 'module';

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  ...(useESM ? { extensionsToTreatAsEsm: ['.ts'] } : {}),
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
        diagnostics: false,
        useESM,
      },
    ],
  },
  collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/**/*.spec.ts', '!<rootDir>/src/**/*.test.ts'],
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
