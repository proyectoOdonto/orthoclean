import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WrongPageRoutingModule } from './wrong-routing.module';

import { WrongPage } from './wrong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WrongPageRoutingModule
  ],
  declarations: [WrongPage]
})
export class WrongPageModule {}
