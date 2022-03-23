import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'animais',
    loadChildren: () =>
    import('./animais/animais.module').then((m) => m.AnimaisModule),
  },
  {
    path: 'formulario',
    loadChildren: () =>
    import('./formulario/formulario.module').then((m) => m.FormularioModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
