import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoPartidoLolPageRoutingModule } from './resultado-partido-lol-routing.module';

import { ResultadoPartidoLolPage } from './resultado-partido-lol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoPartidoLolPageRoutingModule
  ],
  declarations: [ResultadoPartidoLolPage]
})
export class ResultadoPartidoLolPageModule {}
