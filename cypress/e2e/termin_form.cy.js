/// <reference types="cypress" />

import { customerData } from '../fixtures/customer_data';

describe('form', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://danielsusen.cz');
    cy.login();
  });

  it('fills out form and make an appointment succesfully', () => {
    cy.get('#menu-item-107').click();
    cy.get('form').should('be.visible').wait(1000);
    customerData.forEach(item => {
      cy.get('form').find(item.selector).type(item.value);
    });
    cy.get('form').find('select[name="nabidka"]').select('Nový termín');
    cy.get('form').find('input[type="submit"]').click();
    cy.get('form')
      .find('.wpcf7-response-output')
      .should('contain.text', 'Děkujeme Vám. Vaše zpráva byla úspěšně odeslána.');
  });
});
