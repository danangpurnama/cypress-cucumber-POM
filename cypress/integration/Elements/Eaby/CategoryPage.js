class CategoryPage {
  dialogCell(text, value) {
    cy.xpath(`(//*[text()='${text}'])[${value}]`).click();
  }

  moreRefinements() {
    cy.get(".x-refine__main__list--more").click();
    cy.wait(1000);
  }

  tabfilter(value) {
    cy.xpath(`(//*[@role="tab"])[${value}]`).click();
    cy.wait(2000);
  }

  checkbox(value) {
    cy.xpath(`(//*[@role="checkbox"])[${value}]`).check();
  }

  fieldStartPrice(text, value) {
    const field = cy.xpath(`(//*[@class="x-textrange__block"])[${value}]`);
    field.type(text);
  }

  fieldEndPrice(text, value) {
    const field = cy.xpath(`(//*[@class="x-textrange__block"])[${value}]`);
    field.type(text);
  }

  itemLocation(value) {
    cy.xpath(`(//*[@role="radio"])[${value}]`).click();
  }

  applyfilter() {
    cy.get(".x-overlay-footer__apply-btn").click();
  }

  assertScreenSize(value) {
    cy.xpath(`//span[text()='${value}']`);
  }

  assertPrice(value) {
    cy.xpath(`(//input)[@value='${value}']`);
  }

  assertLocation(value) {
    cy.xpath(
      `((//span)[@class="cbx x-refine__multi-select-cbx"])[text()='${value}']`
    );
  }
}

export default CategoryPage;
