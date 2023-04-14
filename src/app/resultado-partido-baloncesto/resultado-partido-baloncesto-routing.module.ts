import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoPartidoBaloncestoPage } from './resultado-partido-baloncesto.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoPartidoBaloncestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoPartidoBaloncestoPageRoutingModule {}
