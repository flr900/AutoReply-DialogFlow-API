import 'dotenv/config'

import express, {Request, Response, NextFunction} from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import AppError from './errors/AppError'
import routes from './routes/routes'

import 'express-async-errors';
import OAuth2AuthenticationService from './services/OAuth2AuthenticationService'
const oauth2AuthenticationService = new OAuth2AuthenticationService()
const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('Listening')
})


authenticate()
async function authenticate(){
const OAuthClient =  await oauth2AuthenticationService.OAuth2AuthenticationService()
const AuthCode = await oauth2AuthenticationService.OAuth2Callback(app)
await oauth2AuthenticationService.GetAcessToken(OAuthClient, AuthCode)
}

