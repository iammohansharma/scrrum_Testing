import { Injectable } from '@angular/core';
import { mocksdata } from './mockdata';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MokeserviceService {

  constructor() { }

  getdata():Observable<any[]>{
    return of(mocksdata);
  }
}
