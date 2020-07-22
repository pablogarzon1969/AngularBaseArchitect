describe("Form logout", () => {
  it("Sign in", () => {
    cy.SignIn()
  });
  it("logout", () => {
    cy.get('button[name="logout"]').click()
  });
});
