const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x47te7',
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
