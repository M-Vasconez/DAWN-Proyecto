import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private https: HttpClient) { }
  obtenerEquipos() {
    return this.https.get('https://enigmatic-castle-01537.herokuapp.com/api/equipos')
  }

  obtenerEquiposPorId(id: number) {
    return this.https.get('https://enigmatic-castle-01537.herokuapp.com/api/equipos/'+id.toString())
  }
}


