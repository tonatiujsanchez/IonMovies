import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas: EventEmitter<any> = new EventEmitter();

  loading: boolean = false;


  constructor( public moviesSvc :MoviesService ) { }

  ngOnInit() {}


  cargarMasPaliculas(){

    if( this.moviesSvc.dataCategories['popular'].loading ){
      return;
    }

    // this.moviesSvc.dataCategories['popular'].loading = true;
    this.cargarMas.emit('popular');

  }
}
