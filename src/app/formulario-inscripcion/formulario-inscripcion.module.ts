import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioInscripcionPageRoutingModule } from './formulario-inscripcion-routing.module';

import { FormularioInscripcionPage } from './formulario-inscripcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioInscripcionPageRoutingModule
  ],
  declarations: [FormularioInscripcionPage]
})
export class FormularioInscripcionPageModule {}
