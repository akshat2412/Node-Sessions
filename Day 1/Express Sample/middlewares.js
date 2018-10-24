const express = require('express')

const server = express()

function m1 (req, res, next) {
    console.log('m1')
    if(req.query.stop == 1) {
        return res.send('Stopped at 1');
    }
    next()
}
function m2 (req, res, next) {
    console.log('m2')
    if(req.query.stop == 2) {
        return res.send('Stopped at 2');
    }
    next()
}
function m3 (req, res, next) {
    console.log('m3')
    if(req.query.stop == 3) {
        return res.send('Stopped at 3');
    }
    next()
}
// next() calls the next function in the stack

// specifying order of middlewares according to the request path
// server.get('/', m1, m2, m3, (req, res) => {
//     res.send('hello world')
// })

// another way is 
// Serve as Global middlewares
/* server.use(m1) 
   server.use(m2)
   server.use(m3) */

// OR
// we can use path specific middlewares
server.use('/a', m1)
server.use(m2)
server.use('/a', m3)

server.get('/', m1, m2, m3, (req, res) => {
    res.send('hello world')
})

server.get('/b/b', m2, (req, res) => {
    res.send('awesome!');
})  /* Only m2 will run, as only m2 matches with path '/b' */

server.get('/a/b', (req, res) => {
    res.send('awesome!');
})

server.listen(2222);

