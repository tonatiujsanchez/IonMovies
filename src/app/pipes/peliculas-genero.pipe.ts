import { Pipe, PipeTransform } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';

@Pipe({
  name: 'peliculasGenero'
})
export class PeliculasGeneroPipe implements PipeTransform {

  transform(peliculas: PeliculaDetalle[], generos:Genre[] ):any[] {

      const peliculaPorGenero: any[] = [];
  
      generos.forEach( genero =>{
        peliculaPorGenero.push(
          {
            genero: genero.name,
            pelis: peliculas.filter( pelicula => {
              return pelicula.genres.find( genre => genre.id === genero.id  )
            })
          }
        )
      });
      
      return peliculaPorGenero;


  }

}
