import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamPage } from './exam.page';

const routes: Routes = [
  {
    path: '',
    component: ExamPage
  },  {
    path: 'correct',
    loadChildren: () => import('./correct/correct.module').then( m => m.CorrectPageModule)
  },
  {
    path: 'wrong',
    loadChildren: () => import('./wrong/wrong.module').then( m => m.WrongPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPageRoutingModule {}
