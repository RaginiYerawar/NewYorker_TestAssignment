class HomePage{
    GetInstFationCategoryLocator(){
        return cy.get('menu-item[href="/instafashion-women/"]')
    }

    GetLifestyleCategoryLocator(){
        return cy.get('menu-item[href="/lifestyle/"]')
    }

    GetGetMoreClubCategoryLocator(){
        return cy.get('menu-item[href="/get-more-club/"]')
    }

    GetLifestyleLocator(){
        return cy.contains('LIFESTYLE')
    }

    GetOutfitImagesLocator(){
        return cy.get('.fraction outfit-image')
    }

    GetGetMoreLogoLocator(){
        return cy.get('[src*="get_more_logo"]')
    }

    ClickOnUserProfile(){
        cy.get('customer-widget').as('customer')
        cy.get('@customer').shadow().find('.customer-widget').click()
        cy.get('@customer').shadow().find('[href="/customer-profile/#/private/customer-profile/change-user-data"]').click()
    }

    GetBirthDateLocator(){
        return cy.get('input.flatpickr-input')
    }
}
export default HomePage