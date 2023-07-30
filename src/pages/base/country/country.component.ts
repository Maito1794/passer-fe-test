import { Component } from '@angular/core';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  title = 'Buscar';
  columns = ['pais', 'codigo_sugef', 'nivel_riesgo'];
  data = [
    { pais: 'Costa Rica', codigo_sugef: 5, nivel_riesgo: 2 },
    { pais: 'Afganistán', codigo_sugef: 1, nivel_riesgo: 3 },
    { pais: 'Estados Unidos', codigo_sugef: 10, nivel_riesgo: 1 }
  ];
}
