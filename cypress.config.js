const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url : "https://www.newyorker.de/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/Tests/*.js'
  },
});
