import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InversionPage } from './inversion.page';

const routes: Routes = [
  {
    path: '',
    component: InversionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InversionPageRoutingModule {}
