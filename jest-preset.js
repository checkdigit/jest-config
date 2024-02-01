// jest-preset.js

export default {
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
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**'],
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
