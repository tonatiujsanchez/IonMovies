import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true
  };

  @Input() peliculas: Pelicula[] =[];
  @Output() cargarMas: EventEmitter<string> = new EventEmitter();

  
  
  constructor( public moviesSvc: MoviesService ) { }

  ngOnInit() {}


  cargarMasPeliculas(){

    if( this.moviesSvc.dataCategories['feature'].loading ){
      return;
    }

    this.cargarMas.emit('feature');
  }

}
