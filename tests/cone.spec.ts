// myFunction.test.ts
import {lateralSurfaceArea, surfaceArea} from '../src/cone';

describe('cone calculation methods', () => {
  it('should return the correct result for lateral surface area', () => {
    const result = lateralSurfaceArea(3, 5);
    expect(result).toBe(47.12388980384689);
  });
  it('should return the correct result for surface area', () => {
    const result = surfaceArea(5, 12);
    expect(result).toBe(267.0353755551324);
  });
});
