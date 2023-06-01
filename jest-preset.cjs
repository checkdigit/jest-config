// jest-preset.cjs

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
        diagnostics: false,
      },
    ],
  },
  collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/**/*.spec.ts', '!<rootDir>/src/**/*.test.ts'],
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
