export const environment = {
  production: false,
  serverUrl: '/api',
  apiAllMovies: 'http://allmovies.prd.pd.com',
  apiUrl: 'http://moviesstorage.prd.pd.com',
  apiMailUrl: 'http://recommendation.prd.pd.com',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://keycloak.prd.pd.com/',
    // Realm
    realm: 'demo-realm',
    clientId: 'demo-angular',
  },
};