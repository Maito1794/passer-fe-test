import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  constructor(private router: Router) { }
  title = 'Catálogo de Riesgos'
  currentTab: any = '';
  tabList = [
    { name: 'Ocupaciones', action: '/ocupaciones' },
    { name: 'Países', action: '/paises' },
    { name: 'Identificaciones', action: '/identificaciones' },
  ];
  changePage(action: any): void {
    this.router.navigate([action.action]);
  }
}
