import {google} from 'googleapis'
import {OAuth2Client} from 'googleapis-common/node_modules/google-auth-library/build/src/auth/oauth2client'
import {Request, Response, Express} from 'express'
import AppError from '../errors/AppError'


export default class OAuth2AuthenticationService  {

  public async OAuth2AuthenticationService () {
    const OAuth2 = google.auth.OAuth2

    // Create OauthClient

const OAuthClient = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URIS
)

//Request User Consent

const consentUrl = OAuthClient.generateAuthUrl({
   access_type: 'offline',
   scope:['https://www.googleapis.com/auth/dialogflow']
})

console.log(`Consent: ${consentUrl}`)

return OAuthClient

}
// Wait google callback

public async OAuth2Callback (app:Express){
  return new Promise((resolve, reject) => {
    app.get('/oauth2callback',(req: Request, res: Response) => {
      const authCode = req.query.code
      res.send('<h1>Thank you!</h1><p>Now close this tab.</p>')
      resolve (authCode)
    })
  })
}

//GetAcessTokens

public async GetAcessToken (OAuthClient: OAuth2Client, AuthCode: any){
  return new Promise((resolve, reject) => {
    OAuthClient.getToken(AuthCode, (error, tokens) => {
      if (error) {
        return reject(error)
      }

      if(!tokens){
        throw new AppError("Failed authentication", 400)
      }

      console.log(`> Access tokens received!` )

      OAuthClient.setCredentials(tokens)
      //set globalAuthentication
      google.options({
        auth: OAuthClient
      })

      resolve()
    })
  })
}

}
