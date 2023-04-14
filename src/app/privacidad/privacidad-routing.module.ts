import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacidadPage } from './privacidad.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacidadPageRoutingModule {}
