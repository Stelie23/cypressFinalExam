const testData = require("../Locators/tricentisAutomobileInsurantData.json")

class automobilEnterInsurantDataPage {
     //Step 6 Input all the required insurant data
        typeFirstName(){
        return cy.get(testData.firstName).type(testData.typeFirstName);
        }
        typeLastName(){
        return cy.get(testData.lastName).type(testData.typeLastName);
        }
        typeDateOfBirth(){
        return cy.get(testData.dateOfBirth).type(testData.typeDateOfBirth);
        }
        selectGender(){
        return cy.get(testData.gender).click();
        }
        typeStreetAddress(){
        return cy.get(testData.streetAddress).type(testData.typeStreetAddress);
        }
        selectCountry(){
        return cy.get(testData.country).select(testData.selectCountry);
        }
        typeZipCode(){
        return cy.get(testData.zipCode).type(testData.typeZipCode);
        }
        typeCity(){
        return cy.get(testData.city).type(testData.typeCity);
        }
        selectOccupation(){
        return cy.get(testData.occupation).select(testData.selectOccupation);
        }
        selectHobbies(){
        return cy.get(testData.hobbies).click();
        }
        //Step 7 Click Next Button
        clickNextButton() {
        cy.get(testData.nextButton2).click();
        }
}
  export default automobilEnterInsurantDataPage;