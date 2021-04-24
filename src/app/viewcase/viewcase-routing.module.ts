import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcasePage } from './viewcase.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcasePageRoutingModule {}
