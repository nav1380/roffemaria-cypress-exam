// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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
import { Data } from "./faker"

Cypress.Commands.add('fill', (data = Data()) => {
    cy.get('input[id="customer.firstName"]').type(data.firstName)
    cy.get('input[id="customer.lastName"]').type(data.lastName)
    cy.get('input[id="customer.address.street"]').type(data.address)
    cy.get('input[id="customer.address.city"]').type(data.city)
    cy.get('input[id="customer.address.state"]').type(data.state)
    cy.get('input[id="customer.address.zipCode"]').type(data.zip)
    cy.get('input[id="customer.phoneNumber"]').type(data.phone)
    cy.get('input[id="customer.ssn"]').type(data.ssn)
    cy.get('input[id="customer.username"]').type(data.usernames)
    cy.get('input[id="customer.password"]').type(data.passwords)
    cy.get('input[id="repeatedPassword"]').type(data.passwords)
})
