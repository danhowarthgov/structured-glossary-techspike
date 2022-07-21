const fs = require('fs')
const _ = require('underscore')

const files = fs.readdirSync('./en/')
const data = []

function getData() {
    _.each(files, (el) => {
    const file = fs.readFileSync('./en/' + el).toString()
    try {
        const json = JSON.parse(file)
        json.filename = el
        data.push(json)
    } catch(err) {
        console.log(err)
    }
});

    return data;
}

module.exports = {
    getData,
}
