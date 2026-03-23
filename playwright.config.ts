import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://restful-booker.herokuapp.com',
  },
  testDir: './tests',
});
