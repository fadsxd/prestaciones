import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DevengoPageComponent } from './pages/devengo-page/devengo-page.component';

const routes: Routes = [
  {
    path: '',
    component: DevengoPageComponent
  },
  // {
  //   path: 'devengo',
  //   component: DevengoPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevengoPrestacionesRoutingModule { }
