import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient) { }
  obtenerJuegos() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4405&s=2022')
  }

  obtenerJuegosPorEquipo(equipo: number) {
    return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/juegos/'+equipo.toString())
  }
}
