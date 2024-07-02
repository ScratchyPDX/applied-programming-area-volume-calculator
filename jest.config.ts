// jest.config.ts
import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Ignore test files in the build directory
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
};

export default config;
