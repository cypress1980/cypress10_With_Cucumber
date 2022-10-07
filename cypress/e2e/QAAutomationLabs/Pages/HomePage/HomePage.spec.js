/// <reference types ="cypress"/>

class HomePage {
  enterURL() {
    cy.visit("https://qaautomationlabs.com/");
  }
  validateMenus(menus) {
    cy.contains(menus);
    return this;
  }
  verifyPageTitle(title) {
    return cy.title().should("eq", title);
  }
}
const homepage = new HomePage();
export default homepage;
