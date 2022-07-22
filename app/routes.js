const express = require('express')
const router = express.Router()

const _ = require('underscore')

const { getData } = require('../app/data')

const data = getData()

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

router.get('/', (req, res) => {
    const sortedData = _.sortBy(data, 'termName')
    const groupedData = _.groupBy(sortedData, 'initial')
    console.log(groupedData)
    res.render('index.html', { groupedData });
})

router.get('/:termName', (req, res) => {
    const { termName } = req.params
    const item = _.findWhere(data, {termName: capitalizeFirstLetter(termName.replace('_', ' '))})
    res.render('terms.html', { item })
})


module.exports = router
