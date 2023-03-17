describe("Hook Demo", function () {
      before(function () {
        cy.log("Before");
      });
    
      after(function () {
        cy.log("Afer");
      });
    
      beforeEach(function () {
        cy.log("Before Each");
      });
    
      afterEach(function () {
        cy.log("After Each");
      });
      it("TC #1", function () {
        console.log("TC#1");
      });
      it("TC #2", function () {
        console.log("TC#2");
      });
      it("TC #3", function () {
        console.log("TC#3");
      });
      it("TC #4", function () {
        console.log("TC#4");
      });
    });
    