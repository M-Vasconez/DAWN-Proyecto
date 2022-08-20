import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosicionesPageRoutingModule } from './posiciones-routing.module';

import { PosicionesPage } from './posiciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosicionesPageRoutingModule
  ],
  declarations: [PosicionesPage]
})
export class PosicionesPageModule {}
