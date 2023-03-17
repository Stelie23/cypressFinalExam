describe('Saucedemo Demo', () =>{
    it('Login successfully using valid data', () =>{
        cy.visit('www.saucedemo.com')
//input username
cy.get('[data-test="username"]').type("standard_user");
//input password
cy.get('[data-test="password"]').type("secret_sauce");
//click the login button
cy.get('[data-test="login-button"]').click({force: true});
//wait for 15 seconds
cy.wait(5000);
//change the filter
cy.get('[data-test="product_sort_container"').select("Price (high to low)");
//validate if the element is present
cy.get('.peek').should('be.visible');

})
})