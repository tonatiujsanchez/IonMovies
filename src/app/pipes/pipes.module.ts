import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { PairsPipe } from './pairs.pipe';
import { ProfilePipe } from './profile.pipe';
import { PeliculasGeneroPipe } from './peliculas-genero.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    PairsPipe,
    ProfilePipe,
    PeliculasGeneroPipe
  ],
  exports: [
    ImagenPipe,
    PairsPipe,
    ProfilePipe,
    PeliculasGeneroPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
