const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'printandpillage/tests/e2e/**/*.cy.js',
      'printandpillage/tests/e2e/**/*test.js',
    ],
  },
})