import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'pago',
    loadChildren: ()=> import ('./pagos-prestaciones/pagos-prestaciones.module').then(m => m.PagosPrestacionesModule),
  },
  {
    path: 'devengo',
    loadChildren: ()=> import ('./devengo-prestaciones/devengo-prestaciones.module').then(m => m.DevengoPrestacionesModule),
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'pago',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
