describe('cenik', () => {
  beforeEach(() => {
    cy.visit('https://danielsusen.cz');
    cy.login();
  });
  it('should have data', () => {
    cy.get('#burger').click();
    cy.get('#menu-hlavni-menu-1').contains('a', 'Ceník').click();
    cy.get('#cenik').should('contain.text', '');
    cy.get('#cenik').contains('a', 'Zobrazit celý ceník').and('be.visible').click();
    cy.url().should('include', '/cenik/');
  });
});
