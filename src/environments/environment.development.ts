export const environment = {
  production: true,
  serverUrl: '/api',
  apiUrl: 'http://moviesstorage.dev.pd.com',
  apiMailUrl: 'http://recomendation.dev.pd.com',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://keycloak.dev.pd.com/',
    // Realm
    realm: 'demo-realm',
    clientId: 'demo-angular',
  },
};