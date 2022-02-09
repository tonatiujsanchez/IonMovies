import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pairs'
})
export class PairsPipe implements PipeTransform {

  transform( arr: any[] ): any[] {

    let arrPairs = [];
    
    arr.forEach( ( item, idx, array ) => {
      
      if( (idx + 1) % 2 === 1 ){
        
        let arrTemp = [];

        arrTemp.push( array[idx] );
        arrTemp.push( array[idx + 1] );

        arrPairs.push( arrTemp );
      }

    });

    return arrPairs;



    /* 
        const pares = arr.reduce( (result, value, index, array) => {

          if ( index % 2 === 0) {
               result.push(array.slice(index, index + 2));
          }

          return result;

      }, []);
        
    return pares;
    */ 


  }

    

}
