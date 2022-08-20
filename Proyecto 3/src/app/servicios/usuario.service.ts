import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  obtenerUsuario() {
    return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/usuarios')
  }

  obtenerUsuarioPorId(id: number) {
    return this.http.get('https://enigmatic-castle-01537.herokuapp.com/api/usuarios/'+id.toString())
  }
}
