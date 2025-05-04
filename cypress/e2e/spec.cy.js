import RegistrationPage from "../support/pages/registration.js"

const registrationPage = new RegistrationPage();

describe('template spec', () => {
  it('passes', () => {
    registrationPage.visit()
    registrationPage.clickRegisterLink()
    registrationPage.fillRegistrationForm()
  })



  
})