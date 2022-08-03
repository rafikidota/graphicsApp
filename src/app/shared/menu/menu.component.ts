import { Component, OnInit } from '@angular/core';

interface Menuitem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent implements OnInit {

  menuItems: Menuitem[] = [
    { route: '/charts/bars', name: 'Barras' },
    { route: '/charts/double-bars', name: 'Barras Dobles' },
    { route: '/charts/doughnut', name: 'Donas' },
    { route: '/charts/doughnut-http', name: 'Donas Http' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
