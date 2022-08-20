import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  constructor(private http: HttpClient) { }
  obtenerPosicion() {
    return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/posiciones')
  }

  obtenerPosicionPorTemporada(temporada: number) {
    return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/posiciones/'+temporada.toString())
  }
}
