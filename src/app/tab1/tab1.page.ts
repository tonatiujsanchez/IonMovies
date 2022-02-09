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

  constructor( private moviesSvc: MoviesService ) {}

  ngOnInit(): void {

    this.getFeature();
    this.getTrendign();
    this.getPopular();
    this.getUpComing();
  }

  getFeature(){
    this.moviesSvc.getFeature().subscribe(
      ( { results } ) => {
        this.peliculasRecientes = [ ...this.peliculasRecientes, ...results ];
        this.moviesSvc.dataCategories['feature'].loading = false;        
      },
      ( err )=> {
        console.log('Hubo un error al obtener las películas', err.name);
        this.moviesSvc.dataCategories['feature'].loading = false; 
        this.moviesSvc.dataCategories['feature'].page--; 
      }
    );
  }

  getTrendign(){
    this.moviesSvc.getTrendign().subscribe(
      ( { results } ) => {
        this.peliculasTendencia = [ ...this.peliculasTendencia, ...results ];
        this.moviesSvc.dataCategories['trendign'].loading = false;
      },
      ( err )=> {
        console.log('Hubo un error al obtener las películas', err.name);
        this.moviesSvc.dataCategories['trendign'].loading = false; 
        this.moviesSvc.dataCategories['trendign'].page--; 
      }
    )
  }

  getPopular(){
    this.moviesSvc.getPopular().subscribe(
      ( { results } ) => {
        this.peliculasPopulares = [ ...this.peliculasPopulares, ...results ];
        this.moviesSvc.dataCategories['popular'].loading = false;
      },
      ( err )=> {
        console.log('Hubo un error al obtener las películas', err.name);
        this.moviesSvc.dataCategories['popular'].loading = false; 
        this.moviesSvc.dataCategories['popular'].page--;
      }
    );
  }

  getUpComing(){
    this.moviesSvc.getUpComing().subscribe(
      ({ results }) =>  {
        this.peliculaProximamente = [ ...this.peliculaProximamente, ...results ];
        this.moviesSvc.dataCategories['coming'].loading = false;
      },
      ( err )=> {
        console.log('Hubo un error al obtener las películas', err.name);
        this.moviesSvc.dataCategories['coming'].loading = false; 
        this.moviesSvc.dataCategories['coming'].page--;
      }
    );
  }
  
  cargarMas( categoria ){

    switch (categoria) {
      case 'feature':
        this.moviesSvc.dataCategories[categoria].loading = true;
        this.getFeature();    
        break;
      case 'trendign':
        this.moviesSvc.dataCategories[categoria].loading = true;
        this.getTrendign();
        break;
      case 'popular':
        this.moviesSvc.dataCategories[categoria].loading = true;
        this.getPopular();    
        break;
      case 'coming':
        this.moviesSvc.dataCategories[categoria].loading = true;
        this.getUpComing();
        break;
    
      default:
        break;
    }
 
  }

}
