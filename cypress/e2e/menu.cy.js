import { menuItems } from '../fixtures/menuitem';
describe('menu', () => {
  beforeEach(() => {
    cy.visit('https://danielsusen.cz');
    cy.login();
  });

  it('all menu items are shown, have link and are clickable', () => {
    cy.viewport(1920, 1080);
    cy.get('#menu-hlavni-menu li').each($el => {
      cy.wrap($el).find('a').should('exist').click();
    });
  });

  it('burger menu items are funcionable', () => {
    cy.viewport(1015, 726);
    cy.get('#burger').click();
    cy.get('#menu-hlavni-menu-1 li').each($el => {
      cy.wrap($el).find('a').should('exist');
    });
  });
});

describe('burger menu', () => {
  beforeEach(() => {
    cy.viewport(1015, 726);
    cy.visit('https://danielsusen.cz');
    cy.login();
  });

  it(`should show sections when clicked`, () => {
    menuItems.forEach(item => {
      cy.get('#burger').click();
      cy.contains('#menu-hlavni-menu-1 li', item.label).should('be.visible').click();
      cy.get(item.selector).should('be.visible');
    });
  });
});
