// jest.spec.ts

import checkValue from './jest.test';
import getValue from './jest';

describe('jest', () => {
  it('should work', () => {
    checkValue(getValue());
  });
});
