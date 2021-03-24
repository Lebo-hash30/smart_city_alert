import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bookings4Page } from './bookings4.page';

const routes: Routes = [
  {
    path: '',
    component: Bookings4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bookings4PageRoutingModule {}
