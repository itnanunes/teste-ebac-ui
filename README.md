# teste-ebac-ui

[Automação Cypress [Módulo 11]](https://github.com/itnanunes/teste-ebac-ui/tree/main/cypress/e2e/3-loja-ebac)


# Ao baixar o projeto em um computador novo:
#### 1. Baixar vs code
#### 2. git install (para instalar o git no projeto)
#### 3. git init (para iniciar o git)
#### 4. git clone link do repositório (para baixar projeto na maquina)
#### 5. Instalar na maquina o nodeJS
#### 6. Adicionar atrevés do terminal
---
    - npm init -y (Criar um arquivo package.json) -> Instalar apenas se não tiver criado
    - npm install cypress (Instalar cypress no projeto)
    - npx cypress open (para abrir a pagina do cypress)

#### 7. Instalar os plugins:
---
    - ES6 Mocha
    - Cypr3ess Snippets
    - Cucumber
    - Git Graph
    ------
# Instalações durante o projeto:
 - Massa de dados e fakes:
  - Download do npm faker-js (a instalação é feita via linha de comando:  npm i @faker-js/faker)
  - Importar a biblioteca no arquivo de teste: import {faker} = from '@faker-js/faker'; (ver arquivo de cadastro.cy.js)

    -----
#### Pastas cypress
    - e2e: Onde fica os comandos em BDD dos testes
    - BaseURL: Pode ser inserida no arquivo cypress.config.js
    - support-> commands.js: Comamndos customizados
   ----

#### Comandos cypress
---
- cy.visit('link'): Entrar no site pelo link
- cy.get('elemento').type('dadosparainserir'): inserir dados
- cy.get('elemento').click(): Clicar em algo
- cy.get('').should(''): Validar o teste('contain','mensagem de validação')
- it.only : Executa apenas esse teste
- cy.get('#seletor-do-seu-campo-de-senha').type('suaSenha', { log: false }): Para não exibir a senha no teste
-  cy.screenshot(): Tirar print da tela
- Métodos:
    - Before: Realiza comandos antes de todos os cenários de testes
    - BeforeEach: Realiza comandos antes de cada cenários de testes
    - After: Realiza comandos depois de todos os cenários de testes
    - AfterEach: Realiza comandos depois de cada cenários de testes (Ex: Tirar print da tela)



