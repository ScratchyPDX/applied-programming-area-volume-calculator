// rectangle.spec.ts
import {perimeter, area, volume, surfaceArea} from '../src/rectangle';

describe('rectangle calculation methods', () => {
  it('should return the correct result for perimeter', () => {
    const result = perimeter(5, 7);
    expect(result).toBe(24);
  });

  it('should return the correct result for area', () => {
    const result = area(14, 3);
    expect(result).toBe(42);
  });

  it('should return the correct result for the volume', () => {
    const result = volume(7.2, 18.34, 5.2);
    expect(result).toBe(686.6496000000001);
  });

  it('should return the correct result for surface area', () => {
    const result = surfaceArea(5, 7, 5);
    expect(result).toBe(190);
  });
});
