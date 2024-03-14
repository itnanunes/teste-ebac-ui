/// <reference types="cypress"/>

describe('Funcionalidade: Login', ()=> {

it ('Deve fazer login com sucesso', () => {
 cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
 cy.get('#username').type('itna.teste@teste.com')
 cy.get('#password').type('teste@123')
 cy.get('#rememberme').check()
 cy.get('.woocommerce-form > .button').click()
 cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, itna.teste (não é itna.teste? Sair)')
})

})

