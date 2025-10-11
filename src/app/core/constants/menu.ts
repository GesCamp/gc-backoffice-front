import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'dashboard',
          label: 'Dashboard',
          route: '/dashboard',
          children: [{ label: 'Admin', route: '/dashboard/admin' }],
        },
        {
          icon: 'admin_panel_settings',
          label: 'Roles y permisos',
          route: '/roles-and-permissions',
          children: [
            { label: 'Módulos', route: '/roles-and-permissions/modules' },
            { label: 'Permisos', route: '/auth/sign-in' },
            { label: 'Roles', route: '/auth/forgot-password' },
            { label: 'Roles y permisos', route: '/auth/new-password' },
            { label: 'Usuarios y roles', route: '' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Errors',
          route: '/errors',
          children: [
            { label: '404', route: '/errors/404' },
            { label: '500', route: '/errors/500' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Components',
          route: '/components',
          children: [{ label: 'Table', route: '/components/table' }],
        },
      ],
    },
    {
      group: 'Collaboration',
      separator: true,
      items: [
        {
          icon: 'download',
          label: 'Download',
          route: '/download',
        },
        {
          icon: 'credit_card',
          label: 'Gift Card',
          route: '/gift',
        },
        {
          icon: 'groups',
          label: 'Users',
          route: '/users',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'settings',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'notifications',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'folder',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
