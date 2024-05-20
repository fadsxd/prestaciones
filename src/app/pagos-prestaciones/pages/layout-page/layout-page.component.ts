import { Component, OnInit } from '@angular/core';
import { PagoServiceService } from '../../services/pago-service.service';
import { TimeInterface } from '../../interfaces/time.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

  timeData: TimeInterface | undefined;
  fecha?: string;
  fechaActual?:string;
  constructor(private timeService: PagoServiceService ) {}

  ngOnInit():void {
    this.startTime();
  }

  startTime():void {
    this.timeService.getTime()
    .subscribe(data=>{
      this.timeData = data;
      this.fecha = data.datetime
      this.fechaActual = this.fecha.split('T')[0];
      const parts = this.fechaActual.split('-');
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const day = parseInt(parts[2]);
      const date = new Date(year, month - 1, day); 
      this.fechaActual = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; 
      console.log(this.fechaActual);
      
    })
  }


}
