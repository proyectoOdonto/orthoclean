import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentsInfoPage } from './instruments-info.page';

const routes: Routes = [
  {
    path: '',
    component: InstrumentsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrumentsInfoPageRoutingModule {}
