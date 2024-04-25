/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json') // importar massa de dados (fixtures)


describe('Funcionalidade: Login', ()=> {
    beforeEach(() => {
        cy.visit ('minha-conta/')
     });

     afterEach(() => {
        cy.screenshot()
     });
it ('Deve fazer login com sucesso', () => {
 cy.get('#username').type('itna.teste@teste.com')
 cy.get('#password').type('teste@123')
 cy.get('.woocommerce-form > .button').click()
 cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, itna.teste (não é itna.teste? Sair)')
})

it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
    cy.get('#username').type('itna.teste@test.com')
    cy.get('#password').type('teste@123')
    cy.get('#rememberme').check()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

});

it('Deve exibir uma mensagem de erro ao inserir senha incorreta', () => {
    cy.get('#username').type('itna.teste@teste.com')
    cy.get('#password').type('12345')
    cy.get('#rememberme').check()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail itna.teste@teste.com está incorreta. Perdeu a senha?')
});

it('Deve exibir uma mensagem de erro ao Deixar campos em branco', () => {
    cy.get('#username').type(' ')
    cy.get('#password').type(' ')
    cy.get('#rememberme').check()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório.')
});

it ('Deve fazer login com sucesso - usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('#rememberme').check()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, itna.teste (não é itna.teste? Sair)')
 
})

it ('Deve fazer login com sucesso - usando fixture', () => {
   cy.fixture('perfil') // nome do arquivo fixture
    . then( dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false}) // não aparecer a senha no print
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
 
    })
})

it.only ('Deve fazer login com sucesso - usando comandos customizados', () => {
    cy.login('itna.teste@teste.com', 'teste@123')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
 
     })

})

