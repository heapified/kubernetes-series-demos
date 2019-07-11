const express = require('express')
const app = express()
const port = 3000
var number = Math.random()

app.get('/', (req, res) => res.send(`Hello, my number is ${number}`))


app.get('/foo', (req, res) => res.send(`FOO, my number is ${number}`))
app.get('/foobar', (req, res) => res.send(`FOOBAR, my number is ${number}`))
app.get('/bar', (req, res) => res.send(`BAR, my number is ${number}`))


app.get('/anotherpath', (req, res) => res.send(`ANOTHERPATH, my number is ${number}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))