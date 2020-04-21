const {
    Given,
    When,
    Then,
    Before,
    After
} = require('cucumber');
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const chai = require('chai');
const {expect} = require('chai');
const {
    until ,
    By,
    Key,
} = require('selenium-webdriver');

const _ = require('lodash');
chai.use(require('chai-match'));

const restUtils = require('../helpers/restUtils');
const chromeDriver = require('../helpers/chromeDriver');
const driver = chromeDriver();

const API_URL = 'https://randomuser.me/api';

const timeout = (waitInSeconds) => {
    return (waitInSeconds) ? (waitInSeconds * 1000) : 10
};

Before(async function () {
    console.log('Before test');
});

After(async function () {
    await driver.quit();
    console.log('After test');
});

Given('New user was created', async function () {
    this.fullName = await restUtils.getUserFullName(API_URL);
})

When('Go to page: {string}', async function (url) {
    await driver.get(url);
})

When('Search for user`s full name', async function () {
  await  driver.wait(until.elementsLocated(By.xpath('//input[@name=\'q\']')));
  await  driver.findElement(By.xpath('//input[@name=\'q\']')).sendKeys(this.fullName, Key.ENTER);
    console.log('hey');

});

Given('Go to {} from the results page', function (url) {

});
