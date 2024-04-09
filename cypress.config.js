const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5yzw9x",
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  //reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/reporter-config.json',
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  scrollBehavior: 'center',
  e2e: {
    baseUrl: 'https://reportportal.epam.com/ui',
  },
});
