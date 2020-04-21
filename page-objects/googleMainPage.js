const driver = require('../helpers/driverManager');

const URL = 'http://google.com'

async function makeSearchRequest(request) {
    await driver.openPage(URL).then(() => {
        return driver.waitForElementToBeLocated('xpath');
    })

}


module.exports = {
    makeSearchRequest: makeSearchRequest,
}

