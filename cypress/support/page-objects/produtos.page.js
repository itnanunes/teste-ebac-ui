class ProdutosPage{

visitarUrl(){
    cy.visit('produtos')
}

    buscarProduto(){
    //código
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product > .row')
    .contains(nomeProduto) //busca pelo nome
    .click() 
    }

    visitarProduto(){

    }

    addProdutoCarrinho(){

    }
}

export default new ProdutosPage()
