const express = require('express')

const app = express()

const port = 8080

app.get('/', (req,res) => {
  res.send("Testing Circle CI")
})

app.listen(port, () => {
  console.log(`Circle CI Testing app is running in port ${port}`)
})
