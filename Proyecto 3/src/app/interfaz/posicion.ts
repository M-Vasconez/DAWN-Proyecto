export interface Posicion {
   id: number;
   temporada: number;
   posicion: number;
   semana: number;
   equipo_id: number;
   equipo: string;
   jugados: number;
   ganados: number;
   perdidos: number;
   empates: number;
   puntos: number;
   division_id: number;
   division: string;
}
