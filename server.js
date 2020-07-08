const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./routes/routes.js')

const app = express()

app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Listening')
})

