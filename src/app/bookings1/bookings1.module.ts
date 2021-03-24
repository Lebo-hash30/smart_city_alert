import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bookings1PageRoutingModule } from './bookings1-routing.module';

import { Bookings1Page } from './bookings1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bookings1PageRoutingModule
  ],
  declarations: [Bookings1Page]
})
export class Bookings1PageModule {}
