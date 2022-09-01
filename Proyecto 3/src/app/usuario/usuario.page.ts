import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../interfaz/usuario';
import { PartidoService } from '../servicios/partido.service';
import { EquipoService } from '../servicios/equipo.service';
import { Equipo } from '../interfaz/equipo';



let id_usuario:number = 4;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  item: Usuario = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    equipo_id: 0,
  };

  equipo: Equipo = {
    id: 0,
    nombre: "",
    ubicacion: "",
    division: "",
    abreviacion: "",
    estadio_id: 0,
    estadio: "",
  };
 

  handleChange(e){
    id_usuario = e.detail.value;
    this.datosFiltrados = []
    this.ngOnInit();
  }

  
  dataSource:any = [];
  datosFiltrados:any = [];
 

  constructor(private usuarioService:UsuarioService, private equipoService:EquipoService, private partidoService:PartidoService) { }

   async ngOnInit() {

    this.usuarioService.obtenerUsuarioPorId(id_usuario).subscribe(respuesta => {
      this.item = respuesta as Usuario;
    })

    await this.equipoService.obtenerEquiposPorId(this.item.equipo_id).subscribe(respuesta => {
       this.equipo = respuesta as Equipo;
    });


    await this.partidoService.obtenerJuegos().subscribe( res => {
      this.dataSource = res as any;
      for(let juegos of this.dataSource.events){
        if(juegos.strAwayTeam == this.equipo.nombre || juegos.strHomeTeam == this.equipo.nombre){
          this.datosFiltrados.push(juegos);
        }
      }
    })

  }

}
