/// <reference types= "cypress" />

describe ('Funcionalidade: Detalhes da conta', () => {

beforeEach(() => {
    cy.visit('/minha-conta')
    cy.fixture('perfil').then(login => {
        cy.login(login.usuario, login.senha) 
    })
    

});

it('Deve completar detalhes da conta com sucesso', () => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a') .click()
    cy.get('#account_first_name').clear().type('itit')
    cy.get('#account_last_name').clear().type('Barbosa')
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


});

it.only('Deve completar detalhes da conta com sucesso - Usando comandos customizados', () => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a') .click()
    cy.detalhesConta('Itnã', 'Santana')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});
})