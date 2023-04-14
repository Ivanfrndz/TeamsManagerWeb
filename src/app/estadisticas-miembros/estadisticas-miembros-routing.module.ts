import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasMiembrosPage } from './estadisticas-miembros.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasMiembrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasMiembrosPageRoutingModule {}
