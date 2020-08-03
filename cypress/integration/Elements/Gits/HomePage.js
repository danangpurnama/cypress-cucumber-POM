class HomePage {
  visit() {
    cy.visit("/");
  }

  ButtonCreateNewGits() {
    const button = cy.get(`svg.octicon.octicon-plus > path`);
    button.click();
    cy.contains("New gist").click();
  }
}

export default HomePage;
