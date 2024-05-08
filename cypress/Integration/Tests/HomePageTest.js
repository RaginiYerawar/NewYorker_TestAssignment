///<reference types="Cypress" />
import HomePage from "../Pages/HomePage"
import LoginPage from "../Pages/LoginPage"

describe('Test suite to test basic workflow of Home Page', ()=>{
    
    let testData
    let homePage
    let loginPage
    before(function(){
        cy.fixture('TestData').then(function(data){
            testData=data
        })
    })

    beforeEach(function(){
        cy.visit(Cypress.env("url"))
        homePage = new HomePage()
        loginPage = new LoginPage()
    })

    it('Test case to verify category lifestyle', ()=>{
        loginPage.LoginWithValidCred(testData.Labels[0], testData.Email, testData.Password)
        //Click on hamburger menu
        loginPage.GetHamburgerMenuLocator().click()
        
        //Click and verify lifestyle category
        homePage.GetLifestyleCategoryLocator().click()
        //Assert url contains selected category
        cy.wait(1000)
        cy.url().should('include', testData.Category[0])
        homePage.GetLifestyleLocator().should('be.visible');
             
    })

    it('Test case to verify category instafashion', ()=>{
        loginPage.LoginWithValidCred(testData.Labels[0], testData.Email, testData.Password)
        //Click on hamburger menu
        loginPage.GetHamburgerMenuLocator().click()
        //Click and verify instafashion category
        homePage.GetInstFationCategoryLocator().click()
        //Assert url contains selected category
        cy.url().should('include',testData.Category[1])
        homePage.GetOutfitImagesLocator().should('be.visible')
    })

    it('Test case to verify category get-more-club', ()=>{
        loginPage.LoginWithValidCred(testData.Labels[0], testData.Email, testData.Password)
        //Click on hamburger menu
        loginPage.GetHamburgerMenuLocator().click()
        //Click and verify get-more-club category
        homePage.GetGetMoreClubCategoryLocator().click()
        //Assert url contains selected category
        cy.url().should('include',testData.Category[2])
        homePage.GetGetMoreLogoLocator().should('be.visible')
    })

    it('Test case to verify birthdate is visible', ()=>{
        loginPage.LoginWithValidCred(testData.Labels[0], testData.Email, testData.Password)
        homePage.ClickOnUserProfile()
        //Assert birth date picker is visible
        homePage.GetBirthDateLocator().should('be.visible')
    })

    //I wanted to check all 4 tests togather, this is another test.
    //For now I marked this test to skip. We can update it to run if required
    it.skip('Test case to verify category all togather and birthdate picker', ()=>{
        loginPage.LoginWithValidCred(testData.Labels[0], testData.Email, testData.Password)
        //Click on hamburger menu
        loginPage.GetHamburgerMenuLocator().click()
        
        //Click and verify lifestyle category
        homePage.GetLifestyleCategoryLocator().click()
        //Assert url contains selected category
        cy.wait(1000)
        cy.url().should('include', testData.Category[0])
        homePage.GetLifestyleLocator().should('be.visible');
        //Click on hamburger menu
        loginPage.GetHamburgerMenuLocator().click()
        //Click and verify instafashion category
        homePage.GetInstFationCategoryLocator().click()
        //Assert url contains selected category
        cy.url().should('include',testData.Category[1])
        homePage.GetOutfitImagesLocator().should('be.visible')
        //Click on hamburger menu
        loginPage.GetHamburgerMenuLocator().click()
        //Click and verify get-more-club category
        homePage.GetGetMoreClubCategoryLocator().click()
        //Assert url contains selected category
        cy.url().should('include',testData.Category[2])
        homePage.GetGetMoreLogoLocator().should('be.visible')
        homePage.ClickOnUserProfile()
        //Assert birth date picker is visible
        homePage.GetBirthDateLocator().should('be.visible')
             
    })

})