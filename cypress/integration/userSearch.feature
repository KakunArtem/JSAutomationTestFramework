Feature: Create a random user and Search for this person's full name in Google

    Scenario: Create a user and search his name in Google
        Given New user was created
        And Go to page 'https://www.google.com/'
        And Search for users full name
        Then Contains Facebook in the results

