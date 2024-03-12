import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.ts'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  setupFiles: ['dotenv/config'],
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};

export default config;
