/// <reference types="cypress" />

import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^eu acesse a página home da aplicação$/, () => {
	loginPage.accessHomePage()
});

When(/^eu inserir meu email "([^"]*)" e minha senha "([^"]*)"$/, (email,password) => {
	console.log(email,password);

	loginPage.accessLoginPage()

    loginPage.fillLogin(email, password)

});

When(/^clicar no botao entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
	console.log(message);
	cy.contains('Dashboard')
	
});
