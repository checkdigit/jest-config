// jest.spec.ts

import { strict as assert } from 'node:assert';

import { describe, it, jest } from '@jest/globals';

import testJson from './test.json' with { type: 'json' };

import checkValue from './jest.test';
import getValue from './jest';

describe('jest', () => {
  it('should work', () => {
    checkValue(getValue());
    assert.equal(testJson.test, 'hello world');
  });

  it('mock works without typing conflict', () => {
    jest.useFakeTimers();
  });
});
