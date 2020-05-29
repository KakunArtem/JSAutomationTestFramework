const searchPageUrl = 'https://google.com'

const searchButtonText = 'Google Search';

const inputArea = 'input[type=text]';
const searchButton = 'input[type=submit]';


class GoogleSearchPage {
    static visitSearchPage() {
        cy.visit(searchPageUrl)
    }

    static useSearch(text) {
        cy.get(inputArea)
            .type(text)
            .type('{enter}')
    }

    static pressSearch() {
        cy.get(searchButton)
            .contains(searchButtonText)
            .click()
    }
}

export default GoogleSearchPage;
