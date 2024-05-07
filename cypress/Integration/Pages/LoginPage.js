class LoginPage{

    IsCountrySelectorVisible(){
        if(cy.get('item-selector').should('be.visible'))
            return true
        return false
    }

    IsDefafaultCountryAsExpected(defaultCountry){
        if(cy.get('item-selector').shadow().find('.selected-element div')
            .invoke('text').then(text => expect(text).to.eq(defaultCountry)))
            return true
        return false
    }

    IsCountryListEmpty(){
        if(cy.get('#country-list-scroll-container div').should('have.length.at.least', 1))
            return true
        return false
    }

    IsGoButtonEnabled(){
        if(cy.get('button').should('be.enabled'))
            return true
        return false
    }

    GetActualLabels(){
        return cy.get('.label').then((labels) => {
            // Get the text of label elements and store them in an array
            const labelTexts = labels.map((index, label) => Cypress.$(label).text()).get()
            return labelTexts;
        })    
    }

    ClickOnGoButton(){
        cy.contains('GO').click()
    }

    ClickOnExpectedLabel(label){
        cy.contains(label).click()
    }

    HandleCookieBanner(){
        cy.get('cookie-banner').shadow().contains('Alle Cookies akzeptieren').click()
    }

    ClickOnAnmeldenButton(){
        cy.contains('ANMELDEN').click()
    }

    GetLoginButtonLocator(){
        return cy.get('#interstitial-login-button')
    }

    EnterValidCredentials(email, password){
        cy.get('#interstitial-login-email-input').type(email)
        cy.get('#interstitial-login-password-input').type(password)
    }

    GetHamburgerMenuLocator(){
        return cy.get('hamburger-menu').shadow().find('div.hamburger-menu svg use')
    }

    LoginWithValidCred(label, email, password){
        this.ClickOnGoButton()
        this.ClickOnExpectedLabel(label)
        this.HandleCookieBanner()
        this.ClickOnAnmeldenButton()
        this.EnterValidCredentials(email, password)
        this.GetLoginButtonLocator().click()
    }
}
export default LoginPage