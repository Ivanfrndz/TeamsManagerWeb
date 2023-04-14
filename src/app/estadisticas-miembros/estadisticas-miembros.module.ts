import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasMiembrosPageRoutingModule } from './estadisticas-miembros-routing.module';

import { EstadisticasMiembrosPage } from './estadisticas-miembros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasMiembrosPageRoutingModule
  ],
  declarations: [EstadisticasMiembrosPage]
})
export class EstadisticasMiembrosPageModule {}
