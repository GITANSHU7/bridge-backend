const axios = require('axios');

const apiHelper = {
    get: async (url) => {
        const response = await axios.get(url);
        return response.data;
    },
    post: async (url, data) => {
        const response = await axios.post(url, data);
        return response.data;
    }
};

module.exports = apiHelper;
