// Adicioanr configurações de link e etc

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7y3zcj',
 e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
  },

})

