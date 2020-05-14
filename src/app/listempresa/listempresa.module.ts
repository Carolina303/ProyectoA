import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListempresaPageRoutingModule } from './listempresa-routing.module';

import { ListempresaPage } from './listempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListempresaPageRoutingModule
  ],
  declarations: [ListempresaPage]
})
export class ListempresaPageModule {}
