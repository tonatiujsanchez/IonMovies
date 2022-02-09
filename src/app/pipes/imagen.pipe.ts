import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imgPath; 

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, size: string = 'w500' ): string {
    if( imagen ){
       return `${ URL }/${ size }${ imagen }`
    }
    
    return `/assets/img/no-image-banner.jpg`;
  }

}
