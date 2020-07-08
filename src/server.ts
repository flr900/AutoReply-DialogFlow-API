import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes/routes'

const app = express()

app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('Listening')
})

