const testData = require("../Locators/tricentisAutomobile.json")

class automobileInsurancePage {
    //Step 3 - Verify all the menu if displayed
    verifyAutomobileInsurancePage()
    {
    cy.get(testData.automobileInsuranceSelected).should('be.visible');
    cy.get(testData.enterVehicleData).should('be.visible');
    cy.get(testData.enterInsurantData).should('be.visible');
    cy.get(testData.enterProductData).should('be.visible');
    cy.get(testData.selectPriceOption).should('be.visible');
    cy.get(testData.sendQuote).should('be.visible');
    }
  }
  export default automobileInsurancePage;
  