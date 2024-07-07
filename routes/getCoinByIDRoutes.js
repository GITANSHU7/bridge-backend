const express = require('express');
const router = express.Router();

const getCoinByIDController  = require('../controllers/getCoinByIdController');

router.get('/:id', getCoinByIDController.getCoinByID);

module.exports = router;