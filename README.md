Angular 19 + Keycloak 22.x starter (two variants)
===============================================

This archive contains two minimal Angular projects preconfigured to use Keycloak:
 - standalone/   : Angular standalone components approach (Angular 19)
 - classic/      : Traditional NgModule/AppModule approach

Instructions (for either project):
1. cd <project-folder>
2. npm install
3. npm start
4. Open http://localhost:4200 — you should be redirected to your Keycloak login.

Notes:
- Ensure your Keycloak client 'front-angular' has redirect URI: http://localhost:4200/* (you already confirmed it).
- If you use HTTPS or a different port, update src/environments/environment.ts accordingly.
- Node >= 20.x, npm >= 10.x recommended.

Contents:
 - package.json (with Angular 19 + keycloak-angular 19 + keycloak-js 22.0.5)
 - src/app/... (auth guard, auth service, keycloak init, home component)
 - src/environments/environment.ts (uses your provided Keycloak config)
