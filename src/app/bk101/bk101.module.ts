import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BK101PageRoutingModule } from './bk101-routing.module';

import { BK101Page } from './bk101.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BK101PageRoutingModule
  ],
  declarations: [BK101Page]
})
export class BK101PageModule {}
