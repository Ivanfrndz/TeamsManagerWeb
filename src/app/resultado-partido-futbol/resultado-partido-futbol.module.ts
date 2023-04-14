import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoPartidoFutbolPageRoutingModule } from './resultado-partido-futbol-routing.module';

import { ResultadoPartidoFutbolPage } from './resultado-partido-futbol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoPartidoFutbolPageRoutingModule
  ],
  declarations: [ResultadoPartidoFutbolPage]
})
export class ResultadoPartidoFutbolPageModule {}
