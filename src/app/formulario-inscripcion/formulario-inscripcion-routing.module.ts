import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioInscripcionPage } from './formulario-inscripcion.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioInscripcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioInscripcionPageRoutingModule {}
