// cylinder.spec.ts
import {lateralSurfaceArea, surfaceArea, volume} from '../src/cylinder';

describe('cylinder calculation methods', () => {
  it('should return the correct result for lateral surface area', () => {
    const result = lateralSurfaceArea(5, 7);
    expect(result).toBe(219.9114857512855);
  });

  it('should return the correct result for surface area', () => {
    const result = surfaceArea(14, 3);
    expect(result).toBe(1495.3981031087415);
  });

  it('should return the correct result for the volume', () => {
    const result = volume(7.2, 18.34);
    expect(result).toBe(2986.8553923928202);
  });
});
