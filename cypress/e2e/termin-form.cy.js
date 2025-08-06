/// <reference types="cypress" />

import { customerData } from '../fixtures/customer-data';

const formDelay = 1000;

describe('form', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://danielsusen.cz');
    cy.login();
  });

  it('fills out form and make an appointment succesfully', () => {
    cy.get('#menu-item-107').click();

    cy.get('form')
      .should('be.visible')
      .wait(formDelay)
      .within(() => {
        customerData.forEach(item => {
          cy.get(item.selector).type(item.value);
        });
        cy.get('select[name="nabidka"]').select('Nový termín');
        cy.get('input[type="submit"]').click();
      });

    cy.get('.wpcf7-response-output').should(
      'contain.text',
      'Děkujeme Vám. Vaše zpráva byla úspěšně odeslána.'
    );
  });
});
