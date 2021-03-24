import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bookings3Page } from './bookings3.page';

const routes: Routes = [
  {
    path: '',
    component: Bookings3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bookings3PageRoutingModule {}
