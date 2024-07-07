const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
const coinListRoutes = require('./routes/coinListRoutes');
const coinRoutes = require('./routes/getCoinByIDRoutes');

app.use('/tokens', coinListRoutes)
app.use('/coins', coinRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
