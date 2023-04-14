import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionSalidaPageRoutingModule } from './confirmacion-salida-routing.module';

import { ConfirmacionSalidaPage } from './confirmacion-salida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionSalidaPageRoutingModule
  ],
  declarations: [ConfirmacionSalidaPage]
})
export class ConfirmacionSalidaPageModule {}
