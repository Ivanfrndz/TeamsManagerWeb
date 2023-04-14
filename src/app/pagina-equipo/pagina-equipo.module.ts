import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaEquipoPageRoutingModule } from './pagina-equipo-routing.module';

import { PaginaEquipoPage } from './pagina-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaEquipoPageRoutingModule
  ],
  declarations: [PaginaEquipoPage]
})
export class PaginaEquipoPageModule {}
