const fetch = require('node-fetch');

const apiURL = 'https://randomuser.me/api'

class RestUtils {

    static parseDataFromRequest(url) {
        return fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
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

