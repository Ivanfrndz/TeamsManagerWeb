import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoPartidoBaloncestoPageRoutingModule } from './resultado-partido-baloncesto-routing.module';

import { ResultadoPartidoBaloncestoPage } from './resultado-partido-baloncesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoPartidoBaloncestoPageRoutingModule
  ],
  declarations: [ResultadoPartidoBaloncestoPage]
})
export class ResultadoPartidoBaloncestoPageModule {}
