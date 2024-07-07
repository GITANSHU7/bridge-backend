const express = require('express');
const router = express.Router();
const { coinList } = require('../controllers/coinListController');

router.get('/', coinList);

module.exports = router;
