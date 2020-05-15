import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {

    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registroempresa',
    loadChildren: () => import('./registroempresa/registroempresa.module').then( m => m.RegistroempresaPageModule)
  },
  {
    path: 'listempresa',
    loadChildren: () => import('./listempresa/listempresa.module').then( m => m.ListempresaPageModule)
  },
  {
    path: 'inversion/:name/:img/:text',
    loadChildren: () => import('./inversion/inversion.module').then( m => m.InversionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
