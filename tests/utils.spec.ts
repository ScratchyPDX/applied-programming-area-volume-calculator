// utils.spec.ts
import {roundNumber} from '../src/utils';

describe('number should be rounded to proper decimal place', () => {
  it('should round to one decimal place', () => {
    const result = roundNumber(12.345, 1);
    expect(result).toBe(12.3);
  });

  it('should round to two decimal places', () => {
    const result = roundNumber(123.456789, 2);
    expect(result).toBe(123.46);
  });
});
