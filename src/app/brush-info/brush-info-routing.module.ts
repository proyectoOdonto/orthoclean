import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrushInfoPage } from './brush-info.page';

const routes: Routes = [
  {
    path: '',
    component: BrushInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrushInfoPageRoutingModule {}
