import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoPartidoLolPage } from './resultado-partido-lol.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoPartidoLolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoPartidoLolPageRoutingModule {}
