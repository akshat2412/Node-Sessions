const express = require('express')

const app = express()

app.use(express.json()) //converts bytes in the req.nody and converts into json, and puts the object into req.body
app.use(express.urlencoded({extended: true}))
/* Ajax submissions are by default in json format, and synchronous submissions are by 
default urlencoded */


app.use('/vendors', require('./routes/vendors'))
app.use('/products', require('./routes/products'))

app.listen(2424);