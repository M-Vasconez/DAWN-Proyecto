import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartidosPageRoutingModule } from './partidos-routing.module';

import { PartidosPage } from './partidos.page';
import { MatToolbarModule } from '@angular/material/toolbar';  
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartidosPageRoutingModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,  
    MatCardModule
  ],
  declarations: [PartidosPage]
})
export class PartidosPageModule {}
