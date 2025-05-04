const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yteuhi",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
