import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id: number;

  pelicula: PeliculaDetalle;
  actores: Cast[] = [];

  textLength: number = 150;

  slideOpts = {
    slidesPerView: 3.4,
    freeMode: true
  };

  constructor( 
    public modalController: ModalController,
    private moviesSvc: MoviesService
    ) { }

  ngOnInit() {    
    this.moviesSvc.getMovieDetail( this.id ).subscribe(
      resp => {
        this.pelicula = resp;        
      }
    );

    this.moviesSvc.getMovieCredits( this.id ).subscribe(
      resp => {
        this.actores = resp.cast;        
      }
    );
  }

  salirDelModal(){
    this.modalController.dismiss();
  }

}
