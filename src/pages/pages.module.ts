// pages/base.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { BaseComponent } from './base/base.component';
import { OcupationComponent } from './base/ocupation/ocupation.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app/app.material.module';
import { CountryComponent } from './base/country/country.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [BaseComponent, OcupationComponent, CountryComponent],
    imports: [CommonModule, ComponentsModule, RouterModule, AppMaterialModule, TranslateModule], // Asegúrate de importar ComponentsModule aquí
    exports: [BaseComponent, OcupationComponent, CountryComponent],
})
export class PagesModule { }
