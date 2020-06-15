const fetch = require('node-fetch');

const apiURL = 'https://randomuser.me/api'

class RestUtils {

    static async parseDataFromRequest(url) {
        return await Promise.resolve(
            fetch(url))
            .then(function (response) {
                return response.json();
            });
    }

    static async getRandomUser() {
        let data = await this.parseDataFromRequest(apiURL);
        let firsName = data.results[0].name.first;
        let lastName = data.results[0].name.last;
        return `${firsName} ${lastName}`
    }
}

export default RestUtils;

