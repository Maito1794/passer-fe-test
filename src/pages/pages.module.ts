// pages/base.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { BaseComponent } from './base/base.component';
import { OcupationComponent } from './base/ocupation/ocupation.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app/app.material.module';

@NgModule({
    declarations: [BaseComponent, OcupationComponent],
    imports: [CommonModule, ComponentsModule, RouterModule, AppMaterialModule], // Asegúrate de importar ComponentsModule aquí
    exports: [BaseComponent, OcupationComponent],
})
export class PagesModule { }
