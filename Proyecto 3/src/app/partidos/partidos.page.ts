import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../servicios/partido.service';
import { Partido } from '../interfaz/partido'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.page.html',
  styleUrls: ['./partidos.page.scss'],
})
export class PartidosPage implements OnInit {
  lista_equipos =["BC","CGY","EDM","HAM","MTL","OTT","SSK","TOR","WPG"];

  item: Partido = {
  id: 0,
   temporada: 2022,
   semana: 0,
   id_estadio: 0,
   equipo1_id: 0,
   puntaje_equipo1: 0,
   equipo2_id: 0,
   puntaje_equipo2: 0,
  };

  constructor(private juegoService:PartidoService,private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    
    this.juegoService.obtenerJuegos().subscribe(res =>{
      this.item = res as Partido;
    })

    let params = this.activatedRoute.snapshot.params;
    let id = params["id"];
    this.juegoService.obtenerJuegosPorEquipo(id).subscribe(res =>{
      this.item = res as Partido;
    })
    
  }

  
}


