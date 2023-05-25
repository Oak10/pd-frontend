export const environment = {
  production: false,
  serverUrl: '/api',
  apiAllMovies: 'http://localhost:8090',
  apiUrl: 'http://localhost:8888',
  apiMailUrl: 'http://localhost:8081',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/',
    // Realm
    realm: 'demo-realm',
    clientId: 'demo-angular',
  },
};