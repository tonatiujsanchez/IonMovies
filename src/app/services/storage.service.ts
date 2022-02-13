import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { of, Observable } from 'rxjs';
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

    this.loadFavorites();
  }


  async loadFavorites() {
    const storage = await this.storage.create();
    this._storage = storage;

    return await this.getFavorites();
  }



  async guardarPelicula( pelicula: PeliculaDetalle ){

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
  
    return (existe) ? false : true;
  }



   async getFavorites(){

     const peliculasStorage:PeliculaDetalle[] = await this._storage.get('ionmovies_peliculas');
     this.peliculas = peliculasStorage || [];   

    return this.peliculas;
  }


  async esPeliculaFavorita( idPelicula: number ): Promise<boolean>{

     const pelis:PeliculaDetalle[] = await this.loadFavorites();

     const existe = pelis.some( peliculaLocal => peliculaLocal.id === idPelicula )
     
    return ( existe ) ? true: false;
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
