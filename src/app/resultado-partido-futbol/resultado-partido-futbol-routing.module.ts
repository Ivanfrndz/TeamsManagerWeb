import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoPartidoFutbolPage } from './resultado-partido-futbol.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoPartidoFutbolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoPartidoFutbolPageRoutingModule {}
