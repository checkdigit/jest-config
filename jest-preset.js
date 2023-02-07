// jest-preset.js

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
        diagnostics: false,
        useESM: true,
      },
    ],
  },
  collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/**/*.spec.ts'],
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
