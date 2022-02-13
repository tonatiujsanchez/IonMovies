import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PipesModule } from '../pipes/pipes.module';

import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SlideCardComponent } from './slide-card/slide-card.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowFavoritesComponent } from './slideshow-favorites/slideshow-favorites.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    SlideshowFavoritesComponent,
    SlideCardComponent,
    DetalleComponent,
    HeaderComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    SlideshowFavoritesComponent,
    SlideCardComponent,
    DetalleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
