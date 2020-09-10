class HomePage {
  ButtonCreateNewgist() {
    const button = cy.get(`svg.octicon.octicon-plus > path`);
    button.click();
    cy.contains("New gist").click();
  }

  Dropdownmenu() {
    const dropdown = cy.get(
      ".js-feature-preview-indicator-container > .Header-link"
    );
    dropdown.click();
  }

  ButtonListGist() {
    const button = cy.get('[href="https://gist.github.com/mine"]');
    button.click();
  }
}

export default HomePage;
