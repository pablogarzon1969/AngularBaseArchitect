
/*it('visitar sitio lohin', () => {
  cy.visit('http://localhost:4200')
  cy.location('protocol').should('eq', 'http:')
  cy.get('form').within((sform)=> {
    cy.get('input[type = "username"]').type('test')
    cy.get('input[type = "password"]').type('test')
  })


});*/

/*describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit('http://localhost:4200')
    cy.location('protocol').should('eq', 'http:')
    cy.get("form");

    cy.get('input[name="username"]').type("test").should("have.value", "test");
    cy.get('input[name="password"]').type("test").should("have.value", "test");
    cy.get('button[name="btnlogin"]').click()
    cy.get('button[name="logout"]').click()
  });
});*/
//https://dev.to/bushraalam/cypress-end-to-end-testing-framework-3naa

describe("Form logout", () => {
  it("Sign in", () => {
    cy.SignIn()
  });

  it("view reports", () => {
    cy.get('a[name="reports"]').click()
    cy.get('a[name="reportpokemon"]').click()
    cy.get('button[name="charmeleon"]').click()

  });

  /*it("logout", () => {
    cy.get('button[name="logout"]').click()
  });*/
});
