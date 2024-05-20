import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-page',
  templateUrl: './pago-page.component.html',
  styleUrls: ['./pago-page.component.scss']
})
export class PagoPageComponent {
  date?:string;

  ngOnInit(){
    this.date = this.getDate();
  }

  getDate():string{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months are zero based
    let dd = today.getDate();
    const mmString = mm < 10 ? '0' + mm : mm.toString();
    const ddString = dd < 10 ? '0' + dd : dd.toString();
    return `${yyyy}-${mmString}-${ddString}`;
  }
}
