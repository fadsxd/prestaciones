import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { PagosPrestacionesRoutingModule } from './pagos-prestaciones-routing.module';
import { PagoPageComponent } from './pages/pago-page/pago-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeaderPrestacionesComponent } from './pages/header-prestaciones/header-prestaciones.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';


@NgModule({
  declarations: [
    PagoPageComponent,
    LayoutPageComponent,
    HeaderPrestacionesComponent,
    FooterPageComponent
  ],
  imports: [
    CommonModule,
    PagosPrestacionesRoutingModule,
    
  ]
})
export class PagosPrestacionesModule { }
