/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
       cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
        
    });

    it('Deve Buscar um produto com sucesso', () => {
        let produto = 'Ingrid Running Jacket'
       produtosPage.BuscarProdutoBarra(produto)
       cy.get('.product_title').should('contain', produto)   
    });

    it('Deve visitar a pagina do produtos', () => {
       let nomeProduto = 'Helena Hooded Fleece'
       produtosPage.VisitarProduto(nomeProduto)
       cy.get('.product_title').should('contain', nomeProduto) 
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Ingrid Running Jacket'
        produtosPage.BuscarProdutoBarra(produto)
        produtosPage.addProdutoCarrinho()
         
    });

    it('Deve adicionar produto ao carrinho - Código otimizado', () => {
        let produto = 'Ingrid Running Jacket'
        let qtd = 10
        produtosPage.BuscarProdutoBarra(produto)
        produtosPage.addProdutoCarrinhoOtimizando('M', 'Orange', qtd )
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produto ao carrinho - Buscando da massa de dados fixture', () => {
        cy.fixture('produtos').then(dados =>{
        produtosPage.BuscarProdutoBarra(dados[2].nomeProduto)
        produtosPage.addProdutoCarrinhoOtimizando(
            dados[2].tamanho, 
            dados[2].cor, 
            dados[2].quantidade )
        cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)

        })
        
    });
});

