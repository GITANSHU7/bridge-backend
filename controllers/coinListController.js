
const axios = require('axios');

exports.coinList = async (req, res) => {
    try {
        const { page = 1, per_page = 100 } = req.query; 

        const response = await axios.get(`${process.env.API_END_POINT}/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page,
                page,
                sparkline: false
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};




