const express = require('express')
const connectToMongodb = require("./config/db")
const app = express()
const port = 3000
connectToMongodb()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})