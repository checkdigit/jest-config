// jest.test.ts

import { strict as assert } from 'node:assert';

export default (valueToCheck: unknown) => {
  assert.ok(valueToCheck);
};
