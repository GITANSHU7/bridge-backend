const axios = require('axios');

const getCoinByID = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${process.env.API_END_POINT}/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getCoinByID };