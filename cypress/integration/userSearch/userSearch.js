import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../../pages/googleSearchPage';
import RestUtils from "../../../helpers/restUtils";
import GoogleResultPage from "../../../pages/googleResultPage";

const randomUser = RestUtils.getRandomUser();

And(/^Go to page 'https:\/\/www\.google\.com\/'$/, () => {
    GoogleSearchPage.visitSearchPage();
});

Given(/^New user was created$/, async () => {
});

And(/^Search for users full name$/,  () => {
    GoogleSearchPage.useSearch(randomUser)
});

Then(/^Contains Facebook in the results$/, function () {
    GoogleResultPage.expect()
});
