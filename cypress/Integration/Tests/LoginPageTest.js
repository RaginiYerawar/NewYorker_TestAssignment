import LoginPage from "../Pages/LoginPage"
describe('Test suite to test basic workflow of Login Page', ()=>{
    
    let testData
    let loginPage
    before(function(){
        cy.fixture('TestData').then(function(data){
            testData=data
        })
    })

    beforeEach(function(){
        cy.visit(Cypress.env("url"))
        loginPage = new LoginPage()
        
    })

    it('Test case for country selector ', ()=>{
        expect(loginPage.IsCountrySelectorVisible()).to.be.true
        //Assert default selection
        expect(loginPage.IsDefafaultCountryAsExpected(testData.SelectedCountry)).to.be.true
        //As requirement of number of countries is unclear, we are just checking there should be atleast 1 country. 
        //Can be updated after knowing number of countries
        expect(loginPage.IsCountryListEmpty()).to.be.true
        //Assert Go button enabled
        expect(loginPage.IsGoButtonEnabled()).to.be.true    
    })

    it('Test case for labels', ()=>{
        loginPage.ClickOnGoButton()
        // Get the actual labels using the GetActualLabels function
        loginPage.GetActualLabels().then((actualLabels) => {
        // Assert that the actual labels are equal to the expected array
        expect(actualLabels).to.deep.equal(testData.Labels);
    });
    })

    it('Test case to verify expected parameter in url', ()=>{
        loginPage.ClickOnGoButton()
        loginPage.ClickOnExpectedLabel(testData.Labels[0])
        //Assert that expected url parameter is present on the url
        cy.url().should('include', testData.ExpectedUrlParameters[0])
    })

    it('Test case to verify hamburger menu exists after successful login ', ()=>{
        loginPage.ClickOnGoButton()
        loginPage.ClickOnExpectedLabel(testData.Labels[0])
        loginPage.HandleCookieBanner()
        loginPage.ClickOnAnmeldenButton()
        //Assert Login button is disabled before entering login details
        loginPage.GetLoginButtonLocator().should('not.be.enabled')
        loginPage.EnterValidCredentials(testData.Email, testData.Password)
        //Assert Login button is enabled after entering login details
        //Assert when clicked on login, hamburger menu is visible
        loginPage.GetLoginButtonLocator().should('be.enabled').then((locator)=>{
            locator.click()
            loginPage.GetHamburgerMenuLocator().should('exist')
        })
    })
})