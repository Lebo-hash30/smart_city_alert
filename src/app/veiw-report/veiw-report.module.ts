import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeiwReportPageRoutingModule } from './veiw-report-routing.module';

import { VeiwReportPage } from './veiw-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeiwReportPageRoutingModule
  ],
  declarations: [VeiwReportPage]
})
export class VeiwReportPageModule {}
