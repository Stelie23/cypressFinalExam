const testData = require("../Locators/tricentisAutomobilePriceOption.json")

class automobileSelectPriceOptionPage {
     //Step 10 Select Ultimate price option
    
     selectPriceOption(){
            return cy.get(testData.selectOption).click();
        }

     //Step 11 Click Next Button   
        clickNextButton() {
        cy.get(testData.nextButton4).click();
        }      
      }
export default automobileSelectPriceOptionPage;