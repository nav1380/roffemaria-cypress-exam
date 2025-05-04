import { faker } from "@faker-js/faker";
 
export function Data() {
    const username = faker.internet.username();
    const password = "passwords";

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.string.numeric(9),
        usernames: username,
        passwords: password
    };
}