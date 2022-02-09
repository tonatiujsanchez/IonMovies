import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  @Input() peliculas: Pelicula[] = [];
  @Input() categoria = '';

  @Output() cargarMas: EventEmitter<string> = new EventEmitter();

  get loading():boolean{
    
    return this.moviesSvc.dataCategories[this.categoria]?.loading
  }

  constructor( public moviesSvc: MoviesService  ) { }

  ngOnInit() {}

  cargarMasPeliculas(){
    if( this.moviesSvc.dataCategories[this.categoria].loading ){
      return;
    }
    this.cargarMas.emit(this.categoria);
  }
}
