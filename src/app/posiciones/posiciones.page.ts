import { Component, OnInit } from '@angular/core';
import { PosicionService } from '../servicios/posicion.service';
import { Posicion } from '../interfaz/posicion'

let temporada:number = 2022;

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.page.html',
  styleUrls: ['./posiciones.page.scss'],
})
export class PosicionesPage implements OnInit {
  item: Posicion = {
    id: 1,
   temporada: 2022,
   posicion: 1,
   semana: 1,
   equipo_id: 1,
   equipo: "",
   jugados: 0,
   ganados: 0,
   perdidos: 0,
   empates: 0,
   puntos: 0,
   division_id: -1,
   division: ""
  };

  handleChange(e){
    temporada = e.detail.value;
    console.log(temporada);
    this.ngOnInit();
  }

  constructor(private posicionService:PosicionService){}

  ngOnInit() {
    this.posicionService.obtenerPosicionPorTemporada(temporada).subscribe(respuesta => {
      this.item = respuesta as Posicion;
    })   
  }
}


