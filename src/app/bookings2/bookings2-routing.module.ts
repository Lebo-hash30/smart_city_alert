import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bookings2Page } from './bookings2.page';

const routes: Routes = [
  {
    path: '',
    component: Bookings2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bookings2PageRoutingModule {}
