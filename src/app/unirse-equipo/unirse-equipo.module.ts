import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirseEquipoPageRoutingModule } from './unirse-equipo-routing.module';

import { UnirseEquipoPage } from './unirse-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirseEquipoPageRoutingModule
  ],
  declarations: [UnirseEquipoPage]
})
export class UnirseEquipoPageModule {}
