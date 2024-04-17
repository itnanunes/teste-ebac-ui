/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it.only('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
       cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        
    });

    it('Deve Buscar um produto com sucesso', () => {
       produtosPage.buscarProduto('')
        
    });

    it('Deve visitar a pagina do produtos', () => {
       
        
    });

    it('Deve adicionar produto ao carrinho', () => {
       
        
    });
});