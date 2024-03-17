/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first() primeiro
        //. last() ultimo
       //.eq(6)  um elemento da lista de forma posicional
       .contains('Tee') //busca pelo nome
       .click() 
       // Validando:
       cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        
    });
});