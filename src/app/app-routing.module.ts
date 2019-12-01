import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'chronometers',
    loadChildren: () => import('./pages/chronometers/chronometers.module').then( m => m.ChronometersPageModule)
  },
  {
    path: 'brush-info',
    loadChildren: () => import('./pages/brush-info/brush-info.module').then( m => m.BrushInfoPageModule)
  },
  {
    path: 'instruments-info',
    loadChildren: () => import('./pages/instruments-info/instruments-info.module').then( m => m.InstrumentsInfoPageModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./pages/exam/exam.module').then( m => m.ExamPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
