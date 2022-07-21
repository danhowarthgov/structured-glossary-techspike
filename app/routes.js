const express = require('express')
const router = express.Router()

const { getData } = require('../app/data');

const data = getData();

router.get('/data', (req, res) => {
    console.log(data);
    res.send(data);
})

module.exports = router
