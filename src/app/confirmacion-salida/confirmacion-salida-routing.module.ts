import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionSalidaPage } from './confirmacion-salida.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionSalidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionSalidaPageRoutingModule {}
