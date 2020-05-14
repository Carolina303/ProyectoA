import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListempresaPage } from './listempresa.page';

const routes: Routes = [
  {
    path: '',
    component: ListempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListempresaPageRoutingModule {}
