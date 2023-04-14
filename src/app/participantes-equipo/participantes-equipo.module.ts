import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantesEquipoPageRoutingModule } from './participantes-equipo-routing.module';

import { ParticipantesEquipoPage } from './participantes-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantesEquipoPageRoutingModule
  ],
  declarations: [ParticipantesEquipoPage]
})
export class ParticipantesEquipoPageModule {}
