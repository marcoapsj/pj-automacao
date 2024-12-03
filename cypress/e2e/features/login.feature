Feature: Login
Funcionalidade para realizar tentativas de Login no site phptravels

    Scenario Outline: "<cenario>"
      Given eu acesse a página home da aplicação
      When eu inserir meu email "<email>" e minha senha "<senha>"
      And clicar no botao entrar
      Then tenho meu acesso "<mensagem>"

    Examples:
      | cenario           | email                |  senha    |  mensagem                 |
      | Login com sucesso | user@phptravels.com   | demouser  | com sucesso na aplicação  |