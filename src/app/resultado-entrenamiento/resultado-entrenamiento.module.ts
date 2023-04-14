import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoEntrenamientoPageRoutingModule } from './resultado-entrenamiento-routing.module';

import { ResultadoEntrenamientoPage } from './resultado-entrenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoEntrenamientoPageRoutingModule
  ],
  declarations: [ResultadoEntrenamientoPage]
})
export class ResultadoEntrenamientoPageModule {}
