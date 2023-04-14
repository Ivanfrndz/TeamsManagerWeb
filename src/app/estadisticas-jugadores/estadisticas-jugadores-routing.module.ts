import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasJugadoresPage } from './estadisticas-jugadores.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasJugadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasJugadoresPageRoutingModule {}
