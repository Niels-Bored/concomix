import { Injectable } from '@angular/core';
import { Pelicula, Serie } from '../pelicula'; 
import { PELICULAS, SERIES } from '../mispeliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private pelicula:Pelicula[]=PELICULAS;
  private serie:Serie[]=SERIES;

  constructor() { }

  getPeliculas(): Pelicula[]{
    return this.pelicula;
  }
  
  getSeries():Serie[]{
    return this.serie;
  }

}
