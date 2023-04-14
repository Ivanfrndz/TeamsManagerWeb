import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirPartidoPageRoutingModule } from './anadir-partido-routing.module';

import { AnadirPartidoPage } from './anadir-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirPartidoPageRoutingModule
  ],
  declarations: [AnadirPartidoPage]
})
export class AnadirPartidoPageModule {}
