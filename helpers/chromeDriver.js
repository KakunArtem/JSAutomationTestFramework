const chromeDriver = require('chromedriver');
const selenium = require('selenium-webdriver');

module.exports = function () {
    let driver = new selenium.Builder().withCapabilities({
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
            args: ['start-maximized']
        },
        path: chromeDriver.path
    }).build();

    return driver;
};
