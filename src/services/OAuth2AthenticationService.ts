import {google} from 'googleapis'
import path from 'path'

interface IGoogleCredentials {
  web: {
    client_id: string,
    client_secret: string
    redirect_uris: string[]
  }
}

OAuth2AuthenticationService()

export default async function OAuth2AuthenticationService (routes) {
  const OAuth2 = google.auth.OAuth2

// Create OauthClient

const credentialsPath = path.resolve(__dirname, "..", "..", "credentials")

const OauthCredentials: IGoogleCredentials = require(`${credentialsPath}/OAuthCredentials.json`)


const OAuthClient = new OAuth2(
  OauthCredentials.web.client_id,
  OauthCredentials.web.client_secret,
  OauthCredentials.web.redirect_uris[0]
)

//Request User Consent

const consentUrl = OAuthClient.generateAuthUrl({
   access_type: 'offline',
   scope:['https://www.googleapis.com/auth/dialogflow']
})

console.log(`Consent: ${consentUrl}`)

}
