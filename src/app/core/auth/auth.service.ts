import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private keycloak: KeycloakService) {}

  async getToken(): Promise<string | undefined> {
    return await this.keycloak.getToken();
  }

  async getProfile() {
    return await this.keycloak.loadUserProfile();
  }

  logout() {
    this.keycloak.logout(window.location.origin);
  }
}
