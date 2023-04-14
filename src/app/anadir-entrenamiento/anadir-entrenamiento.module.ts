import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirEntrenamientoPageRoutingModule } from './anadir-entrenamiento-routing.module';

import { AnadirEntrenamientoPage } from './anadir-entrenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirEntrenamientoPageRoutingModule
  ],
  declarations: [AnadirEntrenamientoPage]
})
export class AnadirEntrenamientoPageModule {}
