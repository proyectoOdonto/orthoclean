import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrongPage } from './wrong.page';

const routes: Routes = [
  {
    path: '',
    component: WrongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrongPageRoutingModule {}
