/// <reference types="cypress" />
import HomeElements from "../elements/home_elements"
import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements
const homeElements = new HomeElements

const url = Cypress.config('baseUrl')

class LoginPage {

    accessHomePage(){    
        cy.visit(url)
        cy.wait(10000)
        //cy.get(home_elements.btnHideCookie()).click()
    }

    accessLoginPage() {
        cy.log('Tentando encontrar o botão Account');
    
        // Aguarda até que o botão esteja visível e clique
        cy.get(homeElements.selectAccount(), { timeout: 15000 })
            .should('exist') // Garante que o elemento existe
            .should('be.visible') // Garante que o elemento está visível
            .click();
    
        cy.log('Clicando no botão Login');
    
        // Aguarda até que o botão Login esteja visível e clique
        cy.get(homeElements.btnLogin(), { timeout: 15000 })
            .should('exist') // Garante que o botão Login existe
            .should('be.visible') // Garante que o botão está visível
            .click();
    
        cy.log('Verificando URL da página de login');
    
        // Verifica a URL da página de login
        cy.url().should('include', '/login');
    }
    
    
    fillLogin(email, password) {
        cy.get(loginElements.inputEmail()).type(email);
        cy.get(loginElements.inputPassword()).type(password);
    }
    

    submitLogin() {
        cy.get(loginElements.submitLogin())
            .should('exist') // Verifica se o botão existe no DOM
            .should('be.visible') // Garante que o botão está visível
            .click(); // Clica no botão
    }
    


} export default LoginPage
