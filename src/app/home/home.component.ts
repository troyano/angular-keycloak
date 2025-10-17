import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div style="padding:24px;text-align:center;">
      <h1>Bienvenido a EDI-AI (Angular + Keycloak)</h1>
      <p style="margin-top:8px">Usuario: {{ username }}</p>
      <button (click)="logout()" style="margin-top:16px;padding:8px 12px">Cerrar sesión</button>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  username = '';

  constructor(private auth: AuthService) {}

  async ngOnInit() {
    const profile = await this.auth.getProfile();
    this.username = profile.username ?? '';
  }

  logout() {
    this.auth.logout();
  }
}
