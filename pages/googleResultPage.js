const links = 'div > cite';

class GoogleResultPage {
    static expect() {
        cy.contains(links, 'facebook')
            .should('be.visible')
    }
}

export default GoogleResultPage
