import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaEquipoPage } from './pagina-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaEquipoPageRoutingModule {}
