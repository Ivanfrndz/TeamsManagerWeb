import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasJugadoresBaloncestoPage } from './estadisticas-jugadores-baloncesto.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasJugadoresBaloncestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasJugadoresBaloncestoPageRoutingModule {}
