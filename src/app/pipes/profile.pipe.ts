import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imgPath; 

@Pipe({
  name: 'profile'
})
export class ProfilePipe implements PipeTransform {

  transform(imagen: string, gender = 1 , size: string = 'w500' ): string {
    
    if( imagen ){
       return `${ URL }/${ size }${ imagen }`
    }

    if( gender === 0  ){
      gender = 2
    }

    return `/assets/img/no-avatar-${gender}.jpg`;
  }


}
