import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';

  colores = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'danger'
  ];

  get getColor(): string{
    const randomIndex = Math.floor( Math.random() * this.colores.length );
    return this.colores[ randomIndex ];
  }

  sujerencias = [
    {
      name: 'Spiderman',
      color: this.getColor
    },
    {
      name: 'Avengers',
      color: this.getColor
    },
    {
      name: 'Transformers',
      color: this.getColor
    },
    {
      name: 'El Señor de los anillos',
      color: this.getColor
    },
    {
      name: 'Star Wars',
      color: this.getColor
    },
    {
      name: '007',
      color: this.getColor
    },
    {
      name: 'X-Men',
      color: this.getColor
    },
    {
      name: 'El planeta de los simios',
      color: this.getColor
    }
  ];


  peliculas: Pelicula[] = [];
  loading: boolean = false;

  constructor( 
    private moviesSvc: MoviesService,
    public modalController: ModalController
  ) {}


  onSearchChange( event ){

    this.loading = true;

    const valor = event.target.value;
    
    if( valor.trim() === '' ){
      this.peliculas = [];

      setTimeout(() => {
        this.loading = false;
      }, 300);

      return;
    }

    this.moviesSvc.searchMovies( valor ).subscribe(
      ({ results }) => {

        this.loading = false;

        this.peliculas = results;
      }
    );
    
    }

    async verDetalle( idPelicula: number ){

      const modal = await this.modalController.create({
        component: DetalleComponent,
        mode:'ios',
        componentProps: {
          id: idPelicula
        }
      });

      (await modal).present();
    }
    


}

