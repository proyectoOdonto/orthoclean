import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrushInfoPageRoutingModule } from './brush-info-routing.module';

import { BrushInfoPage } from './brush-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrushInfoPageRoutingModule
  ],
  declarations: [BrushInfoPage]
})
export class BrushInfoPageModule {}
