// jest-preset.js

// this is a CommonJS Javascript file, so we can't use imports
import path from 'node:path';
import { promises as fs } from 'node:fs';

// again, this is a CommonJS Javascript file, so we can't use async/await and Typescript warnings are not relevant
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
  collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/**/*.spec.ts', '!<rootDir>/src/**/*.test.ts'],
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
