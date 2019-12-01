import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChronometersPage } from './chronometers.page';

const routes: Routes = [
  {
    path: '',
    component: ChronometersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChronometersPageRoutingModule {}
