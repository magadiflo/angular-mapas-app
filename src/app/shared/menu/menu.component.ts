import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
      `li.list-group-item {
        cursor: pointer;
      }`
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    { ruta: '/mapas/full-screen', nombre: 'FullScreen', },
    { ruta: '/mapas/zoom-range', nombre: 'Zoom Range', },
    { ruta: '/mapas/marcadores', nombre: 'Marcadores', },
    { ruta: '/mapas/propiedades', nombre: 'Propiedades', },
  ];

}
