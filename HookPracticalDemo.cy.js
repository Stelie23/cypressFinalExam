describe ('Before Each Demo', function(){

        beforeEach(function(){
            cy.visit('www.google.com');
           })
    
        it('First Search input',function(){
     //search for cheese in the textbox
            cy.xpath('//input[@class="gLFyf"]').type("Cheese"),
    //click Google Search button
            cy.xpath('//input[@class="gNO89b"]').eq(0).click(),
    //click image link
            cy.get('.MUFPAc > :nth-child(2) > a').click()
    cy.wait(8000);
        })
    
        it('Second Search input',function(){
    //click for bread in the textbox
            cy.xpath('//input[@class="gLFyf"]').type("Bread"),
    //click Google Search button
            cy.xpath('//input[@class="gNO89b"]').eq(0).click(),
    //click image link
            cy.get('.MUFPAc > :nth-child(2) > a').click();
    cy.wait(8000);
        })
    
        it('Third Search input',function(){
    //search for milk in the textbox
            cy.xpath('//input[@class="gLFyf"]').type("Milk"),
    //click Google Search button
            cy.xpath('//input[@class="gNO89b"]').eq(0).click(),
    //click image link
            cy.get('.MUFPAc > :nth-child(2) > a').click();
    cy.wait(8000);
        })
    
    })