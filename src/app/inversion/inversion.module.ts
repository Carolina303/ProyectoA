import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InversionPageRoutingModule } from './inversion-routing.module';

import { InversionPage } from './inversion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InversionPageRoutingModule
  ],
  declarations: [InversionPage]
})
export class InversionPageModule {}
