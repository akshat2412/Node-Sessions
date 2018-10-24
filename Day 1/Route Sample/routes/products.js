const express =require('express')
const { vendors, products } = require('../data')


const route = express.Router()

route.get('/', (req, res) => {
    res.send(products);
})
module.exports = route