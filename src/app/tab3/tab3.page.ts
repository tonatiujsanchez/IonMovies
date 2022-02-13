import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { MoviesService } from '../services/movies.service';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
 
  get peliculasFavoritas(){
    return this.storageSvc.peliculas;
  }

  generos:Genre[] = [];
  

  constructor( 
    private storageSvc: StorageService,
    private moviesSvc: MoviesService
    ) { }


    async ngOnInit() {
      this.generos   = await this.moviesSvc.getGenders();  
    }




}
