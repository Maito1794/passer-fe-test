// pages/base.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { BaseComponent } from './base/base.component';

@NgModule({
    declarations: [BaseComponent],
    imports: [CommonModule, ComponentsModule], // Asegúrate de importar ComponentsModule aquí
})
export class BaseModule { }
