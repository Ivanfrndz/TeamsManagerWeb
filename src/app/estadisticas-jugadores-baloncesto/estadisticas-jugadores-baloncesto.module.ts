import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasJugadoresBaloncestoPageRoutingModule } from './estadisticas-jugadores-baloncesto-routing.module';

import { EstadisticasJugadoresBaloncestoPage } from './estadisticas-jugadores-baloncesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasJugadoresBaloncestoPageRoutingModule
  ],
  declarations: [EstadisticasJugadoresBaloncestoPage]
})
export class EstadisticasJugadoresBaloncestoPageModule {}
