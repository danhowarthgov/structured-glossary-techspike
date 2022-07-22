const express = require('express')
const router = express.Router()

const _ = require('underscore')

const { getData } = require('../app/data')

const data = getData();

router.get('/', (req, res) => {
    const sortedData = _.sortBy(data, 'termName')
    const groupedData = _.groupBy(sortedData, 'initial');
    res.render('index.html', { groupedData });
})

module.exports = router
