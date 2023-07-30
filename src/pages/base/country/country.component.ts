import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  constructor(private translate: TranslateService) { }
  title = '';
  columns = ['pais', 'codigo_sugef', 'nivel_riesgo'];
  data = [
    { pais: 'Costa Rica', codigo_sugef: 5, nivel_riesgo: 2 },
    { pais: 'afghanistan', codigo_sugef: 1, nivel_riesgo: 3 },
    { pais: 'united-states', codigo_sugef: 10, nivel_riesgo: 1 }
  ];
  ngOnInit(): void {
    this.translate.get("search").subscribe((res: string) => {
      this.title = res;
    });
    for (const item of this.data) {
      this.translate.get(item.pais).subscribe((res: string) => {
        item.pais = res;
      });
    }
  }
}
