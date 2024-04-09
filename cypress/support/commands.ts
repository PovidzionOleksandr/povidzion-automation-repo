
 Cypress.Commands.add('login', (email, password) => {
   cy.visit('https://demo.reportportal.io/ui/#default_personal/dashboard')
   cy.get('div[class*="login-button"] button').click()
 })


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })