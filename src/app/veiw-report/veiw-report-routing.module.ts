import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiwReportPage } from './veiw-report.page';

const routes: Routes = [
  {
    path: '',
    component: VeiwReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeiwReportPageRoutingModule {}
