import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcasePageRoutingModule } from './viewcase-routing.module';

import { ViewcasePage } from './viewcase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcasePageRoutingModule
  ],
  declarations: [ViewcasePage]
})
export class ViewcasePageModule {}
