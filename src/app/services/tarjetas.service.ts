import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  private myAppURL = 'https://localhost:44355/';
  private myApiURL = 'api/tarjeta/';

  constructor(private http: HttpClient) { }

  getListTarjetas(): Observable<any>{
    return this.http.get(this.myAppURL + this.myApiURL);
  }

  deleteTarjetas(id: number): Observable<any>{
    return this.http.delete(this.myAppURL + this.myApiURL + id);
  }

  saveTarjetas(tarjeta: any): Observable<any>{
    return this.http.post(this.myAppURL + this.myApiURL, tarjeta);
  }

  updateTarjetas(id: number, tarjeta: any): Observable<any>{
    return this.http.put(this.myAppURL + this.myApiURL + id, tarjeta);
  }
}
