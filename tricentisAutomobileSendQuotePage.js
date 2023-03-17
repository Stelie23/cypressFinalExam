const testData = require("../Locators/tricentisAutomobileSendQuote.json")

class automobileSendQuotePage {
     //Step 12 Input required fields to send quote
        typeEmail(){
            return cy.get(testData.email).type(testData.typeEmail);
            }
        typeUsername(){
            return cy.get(testData.username).type(testData.typeUsername);
            }
        typePassword(){
            return cy.get(testData.password).type(testData.typePassword);
            }
        typeConfirmPassword(){
            return cy.get(testData.confirmPassword).type(testData.typeConfirmPassword);
                }
     //Step 13 Click Send Button 
        clickSendButton() {
        cy.get(testData.sendButton).click();
        }
     //Step 14 Validate Success Pop up window if displayed
        validateSuccessMessage(){
        cy.log('Sending e-mail success!');
        }
     //Step 15 Click Ok Button
        validateOkButtonIfDisplayed(){
        cy.get(testData.okButton).click();

        }
        
}
  export default automobileSendQuotePage;