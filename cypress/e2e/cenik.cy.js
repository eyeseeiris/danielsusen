describe('cenik', () => {
  beforeEach(() => {
    cy.visit('/cenik');
  });
  it('should have data', () => {
    cy.get('h1').should('contain.text', 'Aktuální ceník');
    cy.get('.container').contains('a', 'Zpět na hlavní stránku').and('be.true');
  });
});
