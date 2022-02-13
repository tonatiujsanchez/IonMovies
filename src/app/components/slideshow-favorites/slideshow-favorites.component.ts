import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDetalle } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-favorites',
  templateUrl: './slideshow-favorites.component.html',
  styleUrls: ['./slideshow-favorites.component.scss'],
})
export class SlideshowFavoritesComponent implements OnInit {

  @Input() peliculas: PeliculaDetalle[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
