import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChronometersPageRoutingModule } from './chronometers-routing.module';

import { ChronometersPage } from './chronometers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronometersPageRoutingModule
  ],
  declarations: [ChronometersPage]
})
export class ChronometersPageModule {}
