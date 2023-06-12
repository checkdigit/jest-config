// jest-preset.js

import path from 'node:path';
import { promises as fs } from 'node:fs';

// this is an ESM Javascript file, disable TypeScript-specific type checking issues
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const packageJson = JSON.parse(await fs.readFile(path.join(process.cwd(), 'package.json'), 'utf8'));
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/swagger.ts',
    '!<rootDir>/src/**/swagger.validator.ts',
    '!<rootDir>/src/**/swagger.guard.ts',
  ],
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
