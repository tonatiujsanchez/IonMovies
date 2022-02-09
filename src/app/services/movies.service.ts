import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

import { tap } from "rxjs/operators";

const URL    = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public dataCategories = {
    // business: {
    //   page: 0,
    //   articles: []
    // }
  }

  private popularPage = 0;
  public loading = false;


  constructor( private http: HttpClient ) { }

  getFeature(){

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();

    const mes = hoy.getMonth() + 1;
    let mesString = mes < 10 ? '0'+mes : mes;

    const fechaInicial = `${ hoy.getFullYear() }-${ mesString }-01`;
    const fechaFinal = `${ hoy.getFullYear() }-${ mesString }-${ ultimoDia }`;    
  
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ fechaInicial }&primary_release_date.lte=${ fechaFinal }&`);  
  }

  getTrendign(){
    return this.ejecutarQuery<RespuestaMDB>(`/movie/now_playing?`);
  }



  getUpComing(){
    if( !(Object.keys( this.dataCategories ).includes( 'coming' )) ){
      this.dataCategories['coming'] = {
        page: 0,
        articles: []
      }
    }
    this.dataCategories['coming'].page++;

    return this.ejecutarQuery<RespuestaMDB>(`/movie/upcoming?page=${ this.dataCategories['coming'].page }&`);
  }



  getPopular(){

    if( !(Object.keys( this.dataCategories ).includes( 'popular' )) ){
      this.dataCategories['popular'] = {
        page: 0,
        loading: false
      }
    }
    this.dataCategories['popular'].page++;

    
    const query = `/discover/movie?sort_by=popularity.desc&page=${ this.dataCategories['popular'].page }&`;
    
    return this.ejecutarQuery<RespuestaMDB>( query )
      .pipe(
        tap( resp => {
          return resp;
        })
      );
  }
  



  private ejecutarQuery<T>( query: string ){
    
    query = URL + query;
    query += `api_key=${ apiKey }&language=es&include_image_language=es`;;
    
    return this.http.get<T>( query );
  }
}
