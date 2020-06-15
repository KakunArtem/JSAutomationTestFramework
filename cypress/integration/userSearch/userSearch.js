import {When, Then, Given, And} from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../../pages/googleSearchPage';
import RestUtils from "../../../helpers/restUtils";
import GoogleResultPage from "../../../pages/googleResultPage";

And(/^Go to page 'https:\/\/www\.google\.com\/'$/, async () => {
    await GoogleSearchPage.visitSearchPage();
});

Given(/^New user was created$/, async () => {
});

And(/^Search for users full name$/, async () => {
    await Promise.resolve(RestUtils.getRandomUser())
        .then((result) => {
            GoogleSearchPage.useSearch(result);
        });
});

Then(/^Contains Facebook in the results$/, async () => {
    await GoogleResultPage.expect();
});
