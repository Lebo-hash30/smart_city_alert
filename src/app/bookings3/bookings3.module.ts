import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bookings3PageRoutingModule } from './bookings3-routing.module';

import { Bookings3Page } from './bookings3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bookings3PageRoutingModule
  ],
  declarations: [Bookings3Page]
})
export class Bookings3PageModule {}
