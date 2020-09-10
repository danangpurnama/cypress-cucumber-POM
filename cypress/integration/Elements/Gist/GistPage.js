class GistPage {
  fillgistname(value) {
    const field = cy.get(".input-group > .form-control");
    field.clear();
    field.type(value);
  }

  fillgistvalue(value) {
    const field = cy.get(".commit-create.position-relative");
    field.type(value);
  }

  button_dropdown() {
    cy.get(".details-reset > .btn").click();
  }

  button_public_gist() {
    cy.get(".select-menu-modal > :nth-child(2)").click();
  }

  submit() {
    const button = cy.get(".hx_create-pr-button");
    button.click();
  }

  detailgist(value) {
    cy.xpath(
      `(//*[normalize-space(text()) and normalize-space(.)='${value}'])[1]`
    ).click();
  }

  editgist() {
    cy.get(".pagehead-actions > :nth-child(1) > .btn").click();
  }

  updategist() {
    cy.get(".btn-primary").click();
  }

  deletegist() {
    cy.get(":nth-child(2) > form > .btn").click();
  }

  assert() {
    cy.get(".user-select-contain");
  }

  assertdelete(value) {
    cy.get(".user-select-contain").should("not.contain", value);
  }
}

export default GistPage;
