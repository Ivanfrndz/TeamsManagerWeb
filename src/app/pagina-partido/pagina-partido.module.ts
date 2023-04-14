import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPartidoPageRoutingModule } from './pagina-partido-routing.module';

import { PaginaPartidoPage } from './pagina-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPartidoPageRoutingModule
  ],
  declarations: [PaginaPartidoPage]
})
export class PaginaPartidoPageModule {}
