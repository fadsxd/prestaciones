import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DevengoPrestacionesRoutingModule } from './devengo-prestaciones-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DevengoPageComponent } from './pages/devengo-page/devengo-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    DevengoPageComponent
  ],
  imports: [
    CommonModule,
    DevengoPrestacionesRoutingModule
  ]
})
export class DevengoPrestacionesModule { }
