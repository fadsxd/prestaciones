import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PagoPageComponent } from './pages/pago-page/pago-page.component';




const routes: Routes = [
  {
    path: '',
    component: PagoPageComponent
  },
  // {
  //   path: 'pago',
  //   component: PagoPageComponent
  // }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule],
})
export class PagosPrestacionesRoutingModule { }
