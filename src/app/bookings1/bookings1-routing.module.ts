import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bookings1Page } from './bookings1.page';

const routes: Routes = [
  {
    path: '',
    component: Bookings1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bookings1PageRoutingModule {}
