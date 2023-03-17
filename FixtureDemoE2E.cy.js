//Under Fixture, create a new folder and name it to fixtureDemo.
//In the fixtureDemo create a new file and name it to fixtureDemo.js
//copy the code in the script
//create a new spec file in the integration foder and copy the codes below


describe ('Fixture Demo', function(){
        beforeEach(function(){
            cy.visit('www.google.com');
            cy.fixture("//trial//fixtureDemo.json")
            .then(searchInput =>{
                this.searchInput = searchInput;
            })
            })
    
            it('First Search input',function(){
                cy.xpath('//input[@class="gLFyf"]').type(this.searchInput.searchCategory1),
                cy.xpath('//input[@class="gNO89b"]').eq(0).click(),
                cy.xpath('//a[text()="Images"]').click();
    cy.wait(8000);
                 })
    
             it('Second Search input',function(){
                cy.xpath('//input[@class="gLFyf"]').type(this.searchInput.searchCategory2),
                cy.xpath('//input[@class="gNO89b"]').eq(0).click(),
                cy.xpath('//a[text()="Images"]').click();
    cy.wait(8000);
                 })
                 
             it('Third Search input',function(){
                cy.xpath('//input[@class="gLFyf"]').type(this.searchInput.searchCategory3),
                cy.xpath('//input[@class="gNO89b"]').eq(0).click(),
                cy.xpath('//a[text()="Images"]').click();
    cy.wait(8000);
                     })
    
      })
    
    
    