// jest-preset.js

try {
  process.loadEnvFile();
} catch {
  // it's ok if there's no .env file
}

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
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
