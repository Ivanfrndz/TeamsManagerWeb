import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnirseEquipoPage } from './unirse-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: UnirseEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnirseEquipoPageRoutingModule {}
