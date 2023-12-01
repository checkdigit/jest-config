// jest-preset.js

import packageJson from './package.json' with { type: 'json' };

const useESM = packageJson.type === 'module';

export default {
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
  collectCoverageFrom: ['<rootDir>/src/**'],
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
