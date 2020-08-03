class SignInPage {
  visit() {
    cy.visit("/login");
  }

  fillUsername(value) {
    const field = cy.get(`#login_field`);
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field = cy.get(`#password`);
    field.clear();
    field.type(value);

    return this;
  }

  submit() {
    const button = cy.get(`.btn`);
    button.click();
    cy.wait(2000);
  }
}
export default SignInPage;
