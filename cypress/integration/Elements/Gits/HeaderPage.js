class HeaderPage {
  ButtonCreateNewGits() {
    const button = cy.get(`svg.octicon.octicon-plus > path`);
    button.click();
    cy.contains("New gist").click();
  }
}

export default HeaderPage;
