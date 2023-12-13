// jest.spec.ts

import { describe, it, jest } from '@jest/globals';

import checkValue from './jest.test';
import getValue from './jest';

describe('jest', () => {
  it('should work', () => {
    checkValue(getValue());
  });

  it('mock works without typing conflict', () => {
    jest.useFakeTimers();
  });
});
