const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(`User agent: ${req.headers['user-agent']}`)
  console.log(`IP address: ${req.ip}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
