const express = require('express')
const routes = express.Router()

routes.post('/', (req, res) => {
  console.log(req)
  const data = req.body
  console.log(data)
  return res.json({ message: 'received'})
})

module.exports = routes