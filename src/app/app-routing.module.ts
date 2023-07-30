import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcupationComponent } from '../pages/base/ocupation/ocupation.component';
import { CountryComponent } from '../pages/base/country/country.component';
const routes: Routes = [
  { path: '', redirectTo: 'ocupaciones', pathMatch: 'full' },
  { path: 'ocupaciones', component: OcupationComponent },
  { path: 'paises', component: CountryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
