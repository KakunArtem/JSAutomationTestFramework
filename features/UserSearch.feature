@Avengers
Feature: Create a random user and Search for this person's full name in Google

    @Avengers-1
    Scenario: Create a user and search his name on Google. Validate that Facebook has a profile for this user name
        Given New user was created
        And Go to page: 'https://www.google.com/'
        And Search for user`s full name
        And Go to 'Facebook.com' from the results page
#        Then As an unregistered user verify that current 'Facebook.com' page contains user`s full name
#
#    @Avengers-2
#    Scenario: Create something
#        Given New user with parameters: 'name', 'pretty' was created
#        And Store user`s full name
#        Then Go to page: 'https://www.google.com/'
#        And Search for user`s full name
#        Then Close Driver
#        Then Go to 'Facebook.com' from the results page
#        And As an unregistered user verify that current 'Facebook.com' page contains user`s full name

    @Avengers-3
    Scenario: Check that browser don`t start
        Given New user was created
#        Given I print something
