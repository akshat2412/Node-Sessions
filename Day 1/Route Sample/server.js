const express = require('express')

const app = express()

app.use('/vendors', require('./routes/vendors'))
app.use('/products', require('./routes/products'))

app.listen(2424);