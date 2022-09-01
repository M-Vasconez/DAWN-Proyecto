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

  dataSource:any = [];

  

  constructor(private juegoService:PartidoService){}

  ngOnInit() {
    
    this.juegoService.obtenerJuegos().subscribe(res =>{
      this.dataSource = res as any;
      console.log(this.dataSource.events);
    })
  }  
}


