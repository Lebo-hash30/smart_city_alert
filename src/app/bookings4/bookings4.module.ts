import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bookings4PageRoutingModule } from './bookings4-routing.module';

import { Bookings4Page } from './bookings4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bookings4PageRoutingModule
  ],
  declarations: [Bookings4Page]
})
export class Bookings4PageModule {}
