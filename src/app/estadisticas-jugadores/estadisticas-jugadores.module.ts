import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasJugadoresPageRoutingModule } from './estadisticas-jugadores-routing.module';

import { EstadisticasJugadoresPage } from './estadisticas-jugadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasJugadoresPageRoutingModule
  ],
  declarations: [EstadisticasJugadoresPage]
})
export class EstadisticasJugadoresPageModule {}
