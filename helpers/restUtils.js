const fetch = require('node-fetch');

async function parseDataFromRequest(url) {
    return fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

async function getUserFullName(url) {
    let data = await parseDataFromRequest(url);
    let firsName = data.results[0].name.first;
    let lastName = data.results[0].name.last;
    return `${firsName} ${lastName}`
}

module.exports = {
    parseDataFromRequest: parseDataFromRequest,
    getUserFullName: getUserFullName,
};

