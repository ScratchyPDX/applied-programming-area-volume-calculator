// sphere.spec.ts
import {volume, surfaceArea} from '../src/sphere';

describe('sphere calculation methods', () => {
  it('should return the correct result for the volume', () => {
    const result = volume(12);
    expect(result).toBe(7238.229473870882);
  });

  it('should return the correct result for surface area', () => {
    const result = surfaceArea(5.1);
    expect(result).toBe(326.85129967948205);
  });
});
