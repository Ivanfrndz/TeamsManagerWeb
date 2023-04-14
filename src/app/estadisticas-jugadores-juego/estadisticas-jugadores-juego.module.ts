import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasJugadoresJuegoPageRoutingModule } from './estadisticas-jugadores-juego-routing.module';

import { EstadisticasJugadoresJuegoPage } from './estadisticas-jugadores-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasJugadoresJuegoPageRoutingModule
  ],
  declarations: [EstadisticasJugadoresJuegoPage]
})
export class EstadisticasJugadoresJuegoPageModule {}
