export const oktaConfig = {
    clientId: '0oacytvc16IF3lPB95d7',
    issuer: 'https://dev-68934534.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}