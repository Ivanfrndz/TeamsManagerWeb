import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaEntrenamientoPageRoutingModule } from './pagina-entrenamiento-routing.module';

import { PaginaEntrenamientoPage } from './pagina-entrenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaEntrenamientoPageRoutingModule
  ],
  declarations: [PaginaEntrenamientoPage]
})
export class PaginaEntrenamientoPageModule {}
