export const environment = {
  production: false,
  serverUrl: '/api',
  apiUrl: 'http://moviesstorage.prd.pd.com',
  apiMailUrl: 'http://recomendation.prd.pd.com',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://keycloak.prd.pd.com/',
    // Realm
    realm: 'demo-realm',
    clientId: 'demo-angular',
  },
};