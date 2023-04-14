import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarUsuarioPageRoutingModule } from './cambiar-usuario-routing.module';

import { CambiarUsuarioPage } from './cambiar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarUsuarioPageRoutingModule
  ],
  declarations: [CambiarUsuarioPage]
})
export class CambiarUsuarioPageModule {}
