import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcupationComponent } from '../pages/base/ocupation/ocupation.component';
import { CountryComponent } from '../pages/base/country/country.component';
import { IdentificationTypeComponent } from '../pages/base/identification-type/identification-type.component';
const routes: Routes = [
  { path: '', redirectTo: 'ocupaciones', pathMatch: 'full' },
  { path: 'ocupaciones', component: OcupationComponent },
  { path: 'paises', component: CountryComponent },
  { path: 'identificaciones', component: IdentificationTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
