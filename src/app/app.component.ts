import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private keycloakService: KeycloakService) {}

  items: MenuItem[] = [];
  apiLoaded = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Watched Movies - D wowowowo',
        icon: 'pi pi-fw pi-check-square',
        routerLink: ['movie']
      },
      {
        label: 'Notification Settings',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['configuration']
      },
    ];
  }

  logout() {
    this.keycloakService.logout();
  }


}
