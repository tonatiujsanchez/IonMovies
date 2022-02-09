import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes  : Pelicula[] = [];
  peliculasTendencia  : Pelicula[] = [];
  peliculasPopulares  : Pelicula[] = [];
  peliculaProximamente: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true
  };

  constructor( private moviesSvs: MoviesService ) {}

  ngOnInit(): void {
    this.moviesSvs.getFeature().subscribe(
      ( resp ) => {
        this.peliculasRecientes = resp.results;        
      }
    );
    this.getTrendign();
    this.getPopular();
    this.getUpComing();
  }

  getTrendign(){
    this.moviesSvs.getTrendign().subscribe(
      ( { results } ) => this.peliculasTendencia = [ ...this.peliculasTendencia, ...results ]
    );
  }

  getPopular(){
    this.moviesSvs.getPopular().subscribe(
      ( { results } ) => {
        this.peliculasPopulares = [ ...this.peliculasPopulares, ...results ];
        this.moviesSvs.dataCategories['popular'].loading = false;
      }
    );
  }

  getUpComing(){
    this.moviesSvs.getUpComing().subscribe(
      ({ results }) =>  this.peliculaProximamente = [ ...this.peliculaProximamente, ...results ]
    );
  }
  
  cargarMas(){
    console.log( 'Cargando películas populares!!' );
    this.getPopular();    
  }

}
