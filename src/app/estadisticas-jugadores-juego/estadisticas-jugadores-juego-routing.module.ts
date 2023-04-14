import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasJugadoresJuegoPage } from './estadisticas-jugadores-juego.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasJugadoresJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasJugadoresJuegoPageRoutingModule {}
