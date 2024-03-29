# teste-ebac-ui

[Automação Cypress [Módulo 11]](https://github.com/itnanunes/teste-ebac-ui/tree/main/cypress/e2e/3-loja-ebac)


Ao baixar o projeto em um computador novo:
1. Baixar vs code
2. git install (para instalar o git no projeto)
3. git init (para iniciar o git)
4. git clone link do repositório (para baixar projeto na maquina)
5. Instalar na maquina o nodeJS
6. Adicionar atrevés do terminal
    6.1 npm init -y (Criar um arquivo package.json) -> Instalar apenas se não tiver criado
    6.2 npm install cypress (Instalar cypress no projeto)
    6.3 npx cypress open (para abrir a paginda do cypress)
7. Instalar os plugins:
    7.1 ES6 Mocha
    7.2 Cypr3ess Snippets
    7.3 Cucumber
    7.4 Git Graph
    ------
Instalações durante o projeto:

    -----
Pastas cypress
    e2e: Onde fica os comandos em BDD dos testes

   ----

Comandos cypress
cy.visit('link'): Entrar no site pelo link
cy.get('elemento').type('dadosparainserir'): inserir dados
cy.get('elemento').click(): Clicar em algo
cy.get('').should(''): Validar o teste('contain','mensagem de validação')


