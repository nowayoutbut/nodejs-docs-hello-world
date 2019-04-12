
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', (req, res) => res.send(`Hello World! Azure Express listening on HOST:${host} PORT:${port}`))

app.listen(port, () => console.log(`Example app listening on Host:${host} port ${port}!`))

