import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {

   }

  public getIndicesData():Observable<any> {
    return new Observable(subscriber => {
      this.http.get<any>('assets/data/indices.json')
        .subscribe((result:any) => {
          subscriber.next(result);
          subscriber.complete();
        })
    })
  }
}
