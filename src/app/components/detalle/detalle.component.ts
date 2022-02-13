import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { StorageService } from '../../services/storage.service';


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


  getFavorito: boolean = false;

  constructor( 
    public modalController: ModalController,
    private moviesSvc: MoviesService,
    private storageSvc: StorageService
    ) { }

  async ngOnInit() {  

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


    this.getFavorito = await this.storageSvc.esPeliculaFavorita( this.id );
    
  }

  salirDelModal(){
    this.modalController.dismiss();
  }

  toggleFavorito(){
    this.storageSvc.guardarPelicula( this.pelicula ).then(
      resp => this.getFavorito = resp
    );
  }



}
