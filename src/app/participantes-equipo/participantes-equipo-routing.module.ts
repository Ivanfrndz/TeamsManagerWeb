import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantesEquipoPage } from './participantes-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantesEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantesEquipoPageRoutingModule {}
