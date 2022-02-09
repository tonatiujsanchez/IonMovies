import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { PairsPipe } from './pairs.pipe';
import { ProfilePipe } from './profile.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    PairsPipe,
    ProfilePipe
  ],
  exports: [
    ImagenPipe,
    PairsPipe,
    ProfilePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
