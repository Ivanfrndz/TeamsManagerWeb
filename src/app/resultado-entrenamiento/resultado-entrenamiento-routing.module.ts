import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoEntrenamientoPage } from './resultado-entrenamiento.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoEntrenamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoEntrenamientoPageRoutingModule {}
