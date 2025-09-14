const express = require('express');
const { fireAlert, getFireAlert } = require("../controllers/firealertController");

const router = express.Router();

router.post('/createAlert', fireAlert);
router.get('/getAlert', getFireAlert);


module.exports = router;
