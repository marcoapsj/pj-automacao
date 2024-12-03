const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://www.phptravels.net",
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
