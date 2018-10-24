const express =require('express')

let vendors = [
    'samsung',
    'sony',
    'apple'
]

const route = express.Router()

route.get('/', (req, res) => {
    res.send(vendors);
})

route.get('/:id', (req, res) => {
    res.send(vendors[req.params.id]);
})
module.exports = route