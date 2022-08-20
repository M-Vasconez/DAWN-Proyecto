import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../interfaz/usuario';
import { PartidoService } from '../servicios/partido.service';
import { Partido } from '../interfaz/partido'


let id_usuario:number = 4;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  lista_equipos =["BC Lions","Calgary Stampeders","Edmonton Elks","Hamilton Tiger-Cats","Montreal Alouettes","Ottawa Redblacks",
  "Saskatchewan Roughriders","Toronto Argonauts","Winnipeg Blue Bombers"];
  lista_abreviacion =["BC","CGY","EDM","HAM","MTL","OTT","SSK","TOR","WPG"];

  item: Usuario = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    equipo_id: 0,
  };

  partido: Partido = {
    id: 0,
     temporada: 2022,
     semana: 0,
     id_estadio: 0,
     equipo1_id: 0,
     puntaje_equipo1: 0,
     equipo2_id: 0,
     puntaje_equipo2: 0,
    };

  handleChange(e){
    id_usuario = e.detail.value;
    this.ngOnInit();
  }

  constructor(private usuarioService:UsuarioService, private partidoService:PartidoService ) { }

  ngOnInit() {
    this.usuarioService.obtenerUsuarioPorId(id_usuario).subscribe(respuesta => {
      this.item = respuesta as Usuario;
    })

    console.log("Equipo id: ",this.item.equipo_id);

    this.partidoService.obtenerJuegosPorEquipo(this.item.equipo_id).subscribe( res => {
      this.partido = res as Partido;
      
    })

  }

}
