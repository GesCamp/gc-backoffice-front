import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardMenuRoutesDto } from 'src/app/core/dtos';
import { CardComponent, HeaderDashboardComponent } from 'src/ui';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderDashboardComponent, RouterLink, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  principalCards: Array<CardMenuRoutesDto>;

  constructor() {
    const basePath = 'roles-and-permissions';
    this.principalCards = [
      {
        name: 'Módulos',
        description: 'Gestiona los módulos para los permisos.',
        route: `modules`,
      },
      {
        name: 'Permisos',
        description: 'Gestiona los permisos existentes en el sistema.',
        route: `permissions`,
      },
      {
        name: 'Roles',
        description: 'Gestiona los roles que tendrá el sistema.',
        route: `roles`,
      },
      {
        name: 'Roles y permisos',
        description: 'Administra los roles y sus permisos respectivos.',
        route: `roles-permissions`,
      },
      {
        name: 'Usuarions y roles',
        description: 'Gestiona los roles que tendrá cada usuario.',
        route: `users-roles`,
      },
    ];
  }
}
