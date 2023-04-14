import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirEntrenamientoPage } from './anadir-entrenamiento.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirEntrenamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirEntrenamientoPageRoutingModule {}
