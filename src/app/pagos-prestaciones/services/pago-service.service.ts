import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { TimeInterface } from '../interfaces/time.interface';


@Injectable({
  providedIn: 'root'
})
export class PagoServiceService {

  url:string = 'http://worldtimeapi.org/api/timezone/America/La_Paz';


  constructor(public http: HttpClient) { }


  //TODO: Servicio fecha - hora
  getTime(): Observable<TimeInterface> {
    return this.http.get<TimeInterface>(this.url);
  }

}
