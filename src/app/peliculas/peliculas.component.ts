import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../shared2/pelicula.service'
import { Pelicula, Serie } from '../pelicula';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  mispelis: Pelicula[]=[];
  miserie: Serie[]=[];

  constructor(public miserv: PeliculaService) {
    console.log("constructor de pelis")
  }

  ngOnInit(): void {
    console.log("ngOnInit de Peliculas");
    this.mispelis=this.miserv.getPeliculas();
    console.log(this.mispelis);

    console.log("ngOnInit de series");
    this.miserie=this.miserv.getSeries();
    console.log(this.mispelis);
  }

}
