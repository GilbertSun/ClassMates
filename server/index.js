'use strict'

import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.end('Hello World')
})

app.listen(3000, function() {
    console.log('server is start at 3000')
})
