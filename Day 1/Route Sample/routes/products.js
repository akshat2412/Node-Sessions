const express =require('express')

let products = [
    'iphone',
    's9',
    'note9'
]

const route = express.Router()

route.get('/', (req, res) => {
    res.send(products);
})
module.exports = route