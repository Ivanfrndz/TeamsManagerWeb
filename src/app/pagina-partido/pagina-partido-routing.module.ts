import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPartidoPage } from './pagina-partido.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPartidoPageRoutingModule {}
