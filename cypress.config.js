const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yteuhi",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // you can add more plugins here later if needed
    },
    specPattern: "cypress/e2e/**/*.cy.js", // optional if you want to be explicit
    supportFile: false // optional: use true if you have a support file
  }
});