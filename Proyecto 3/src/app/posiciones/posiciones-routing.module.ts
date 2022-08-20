import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosicionesPage } from './posiciones.page';

const routes: Routes = [
  {
    path: '',
    component: PosicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosicionesPageRoutingModule {}
