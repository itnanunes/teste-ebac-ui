/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('')
    });

    it('Deve adicionar o produto na lista de desejos', () => {
        cy.get('.product-block > .block-inner > .image > .product-image > .image-hover')
        .first() 
        .click() 
        cy.get(':nth-child(2) > .fa').click()
       // Validando:
       cy.contains('Produto adicionado!').should('be.visible');
    
    });

});