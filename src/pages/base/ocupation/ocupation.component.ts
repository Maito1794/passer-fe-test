import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { GeneralMethodsService } from 'src/endpoints/catalogs.connections';
import { Ocupation } from 'src/models/catalogs';

@Component({
  selector: 'app-ocupation',
  templateUrl: './ocupation.component.html',
  styleUrls: ['./ocupation.component.scss']
})
export class OcupationComponent {
  occupationControl = new FormControl();
  occupations: Ocupation[] = [];
  constructor(private translate: TranslateService, private generalMethodsService: GeneralMethodsService) { }
  title = ''
  ngOnInit(): void {
    this.translate.get("search").subscribe((res: string) => {
      this.title = res;
    });
    this.loadOccupations();
  }
  async loadOccupations(): Promise<void> {
    const response = await this.generalMethodsService.GET_OCCUPATIONS();
    if (response.success) {
      this.occupations = response.data as Ocupation[];
    } else {
      this.occupations = [];
    }
  }

  filterOccupations(value: string): Ocupation[] {
    const filterValue = value ? value.toLowerCase() : ''; // Verifica si value no es null
    return this.occupations.filter((occupation) =>
      occupation.name.toLowerCase().includes(filterValue)
    );
  }
}
