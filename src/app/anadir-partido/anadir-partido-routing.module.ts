import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirPartidoPage } from './anadir-partido.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirPartidoPageRoutingModule {}
