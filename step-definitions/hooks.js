const {
    Before,
    After
} = require('cucumber');

const chromeDriver = require('../helpers/driverManager');
const driver = chromeDriver;

Before(async function () {
    // console.log('Before test');
});

After(async function () {
    // driver.quit();
    // console.log('After test');
});
