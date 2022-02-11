import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  peliculas: PeliculaDetalle[] = [];

  constructor( 
    private storage: Storage,
    public toastController: ToastController ) { 

    this.init();
  }


  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;

    this.loadFavoritos();
  }



  guardarPelicula( pelicula: PeliculaDetalle ){

    const existe = this.peliculas.find( peliculaLocal => peliculaLocal.id === pelicula.id  ); 
    let mensaje: string = '';

    if( existe ){
      
      this.peliculas = this.peliculas.filter( peliculaLocal => peliculaLocal.id !== pelicula.id );
      mensaje = 'Se removió de favoritos';
      this.mostrarToast( mensaje );
    }else{
      
      this.peliculas = [ pelicula, ...this.peliculas ]
      mensaje = 'Se agregó a favoritos';
      this.mostrarToast( mensaje );
    }
    
    this._storage.set( 'ionmovies_peliculas', this.peliculas );

    console.log( this.peliculas );
  }

  async loadFavoritos(){
    try {

      const peliculasStorage = await this._storage.get('ionmovies_peliculas');
      this.peliculas = peliculasStorage || [];    

    } catch (error) {
      console.log('Hubo un error con el storage', error);
    }

  }

  esPeliculaFavorita( pelicula: PeliculaDetalle ):boolean{    
    return this.peliculas.some( peliculaLocal => peliculaLocal.id === pelicula.id );
  }


  async mostrarToast( mensaje: string ) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 700,
      cssClass: 'text-center',
      position: 'top',
      mode:'ios'
    });

    (await toast).present();
  }



}
