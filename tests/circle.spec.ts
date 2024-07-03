// circle.spec.ts
import {diameter, circumference, area} from '../src/circle';

describe('circle calculation methods', () => {
  it('should return the correct result for diameter', () => {
    const result = diameter(5);
    expect(result).toBe(10);
  });

  it('should return the correct result for circumference', () => {
    const result = circumference(12);
    expect(result).toBe(75.39822368615503);
  });

  it('should return the correct result for the area', () => {
    const result = area(17);
    expect(result).toBe(907.9202768874503);
  });
});
