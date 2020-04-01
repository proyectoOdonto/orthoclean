import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrumentsInfoPageRoutingModule } from './instruments-info-routing.module';

import { InstrumentsInfoPage } from './instruments-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrumentsInfoPageRoutingModule
  ],
  declarations: [InstrumentsInfoPage]
})
export class InstrumentsInfoPageModule {

}
