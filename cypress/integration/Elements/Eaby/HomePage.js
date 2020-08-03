class HomePage {
  visit() {
    cy.visit("/");
  }

  navbarCategory(value) {
    cy.xpath(`(//*[@class='hl-cat-nav__container']/li)[${value}]`).trigger(
      "mouseover"
    );
  }

  spanCategory(value) {
    cy.xpath(`(//*[@class='hl-cat-nav__js-link'])[${value}]`).click();
  }

  fieldSearch(value) {
    const field = cy.get("#gh-ac");
    field.clear();
    field.type(value);
  }

  selectCategory(value) {
    cy.get("#gh-cat").select(value);
  }

  buttonSearch() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.get("form").contains("Search").click();
  }

  assertResultSearch(value) {
    cy.title(value);
  }
}

export default HomePage;
