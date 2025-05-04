import { Data } from "../faker";

class RegistrationPage {
    visit() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    }

    clickRegisterLink() {
        cy.get('#loginPanel > :nth-child(3) > a').click();
    }

    fillRegistrationForm() {
        const data = Data()
        cy.get('input[name="customer.firstName"]').type(data.firstName);
        cy.get('input[name="customer.lastName"]').type(data.firstName);
        cy.get('input[name="customer.address.street"]').type(data.firstName);
        cy.get('input[name="customer.address.city"]').type('City');
        cy.get('input[name="customer.address.state"]').type('State');
        cy.get('input[name="customer.address.zipCode"]').type('12345');
        cy.get('input[name="customer.phoneNumber"]').type('1234567890');
        cy.get('input[name="customer.ssn"]').type('123-45-6789');
        cy.get('input[name="customer.username"]').type('johndoe123');
        cy.get('input[name="customer.password"]').type('password');
        cy.get('input[name="repeatedPassword"]').type('password');
    }

    submitForm() {
        cy.get('[colspan="2"] > .button').click();
    }
}

export default RegistrationPage;