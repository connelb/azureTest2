interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'seb7PkmMXqiZ3oXbjd76wJGpj1HtcSAn',
  domain: 'balance.auth0.com',
  callbackURL: 'http://brianazuretest2.azurewebsites.net/callback'
};
