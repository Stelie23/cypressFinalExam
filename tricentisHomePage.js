const testData = require("../Locators/tricentisHome.json");

class tricentisHomePage {
  //Step 1 Verify Tricentis Insurance Menus
  verifyTricentisInsuranceMenus(){
    cy.get(testData.automobileMenu).should('be.visible');
    cy.get(testData.truckMenu).should('be.visible');
    cy.get(testData.motorcycleMenu).should('be.visible');
    cy.get(testData.camperMenu).should('be.visible');
  }
  //Step 2 Click Automobile hyperlink
  navigateToAutomobilePage(){
    cy.get(testData.automobileMenu).click();
  }
}
export default tricentisHomePage;
