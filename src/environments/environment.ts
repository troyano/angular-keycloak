export const environment = {
  production: false,
  stage: false,
  env: 'local',
  url_backend_ai: 'http://localhost:8000/',
  keycloak: {
    url: 'https://keycloak.ediaimx.softwarecumbre.com:8443',
    realm: 'edi-project',
    clientId: 'front-angular',
    responseMode: 'fragment',
    responseType: 'code',
    scope: 'openid address email profile roles offline_access',
    requireHttps: false,
    showDebugInformation: true,
  },
};
