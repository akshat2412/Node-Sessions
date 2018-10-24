const express =require('express')
const { vendors, products } = require('../data')



const route = express.Router()

// Make sure that the data you are sending is JSON, if you wish to use res.json
route.get('/', (req, res) => {
    res.status(200).json(vendors);
})

route.get('/:id', (req, res) => {
    res
     .status(200)
     .json(vendors[req.params.id]);
})


route.post('/', (req, res) => {
    vendors.push({
        name: req.body.name
    })

    res.status(201).json({
        id: vendors.length - 1,
        success: true
    })
})
module.exports = route