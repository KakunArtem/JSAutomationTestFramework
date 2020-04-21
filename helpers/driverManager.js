const chromeDriver = require('./chromeDriver.js');
// const driver = chromeDriver();
// const By = driver.By;
// const until = driver.until;

async function openPage(url) {
    driver.get(url);
}

async function waitForElementToBeLocated(xPath, waitInSeconds) {
    let timeout = (waitInSeconds) ? (waitInSeconds * 1000) : 10;

    return driver.wait(until.elementLocated(By.xpath(xPath)), timeout);
}

async function clickOnElement(element) {

}

async function quit() {
    driver.quit();
}

module.exports = {
    openPage: openPage,
    quit: quit,
    clickOnElement: clickOnElement,
    waitForElementToBeLocated: waitForElementToBeLocated,
};
