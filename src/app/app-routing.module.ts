import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '../pages/base/base.component';
import { OcupationComponent } from '../pages/base/ocupation/ocupation.component';
const routes: Routes = [
  { path: '', redirectTo: '/ocupaciones', pathMatch: 'full' },
  { path: 'ocupaciones', component: OcupationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
