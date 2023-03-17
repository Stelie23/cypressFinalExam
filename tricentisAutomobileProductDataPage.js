const testData = require("../Locators/tricentisAutomobileProductData.json")

class automobilEnterProductDataPage {
     //Step 8 input all the required product data
        typeStartDate(){
        return cy.get(testData.startDate).type(testData.typeStartDate);
        }
        selectInsuranceSum(){
        return cy.get(testData.insuranceSum).select(testData.selectInsuranceSum);
        }
        selectMeritRating(){
        return cy.get(testData.meritRating).select(testData.selectMeritRating);
        }
        selectDamageInsurance(){
        return cy.get(testData.damageInsurance).select(testData.selectDamageInsurance);
        }
        selectOptionalProducts(){
        return cy.get(testData.optionalProducts).click();
        }
        typeCourtesyCar(){
        return cy.get(testData.courtesyCar).select(testData.typeCourtesyCar);
        }
        //Step 9 Click Next Button
        clickNextButton() {
        cy.get(testData.nextButton3).click();
        }
}
  export default automobilEnterProductDataPage;