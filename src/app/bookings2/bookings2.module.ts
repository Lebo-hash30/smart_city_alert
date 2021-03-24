import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bookings2PageRoutingModule } from './bookings2-routing.module';

import { Bookings2Page } from './bookings2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bookings2PageRoutingModule
  ],
  declarations: [Bookings2Page]
})
export class Bookings2PageModule {}
