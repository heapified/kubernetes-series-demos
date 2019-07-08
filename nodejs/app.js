const express = require('express')
const app = express()
const port = 3000
var number = Math.random()

app.get('/', (req, res) => res.send(`Hello, my number is ${number}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))