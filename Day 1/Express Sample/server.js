const express = require('express')

const server = express()

let greetings = [
    'Good Morning', 
    'How are you ?',
    'What a great day!'
]

server.get('/', (req, res) => {
    res.send('Hello World');
})
server.get('/greet', (req, res) => {
    res.send('Goodmorning! ');
})

// Path parameters
server.get('/greet/:id', (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        res.send('Wrong greeting id');
    }
    res.send(greetings[req.params['id']])
})

// Query params
// The same query passed twice is a valid way to pass an array 
server.get('/hello', (req, res) => {
    console.log(req.query)
    if ( !req.query.name) {
        req.query.name = 'Guest'
    }
    res.send('Hello ' + req.query.name);
})

// any port less than 1024 needs admin access
server.listen(2222)