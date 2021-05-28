import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FIELDS } from '../mock/mock-fields';
import { Field } from '../interfaces/field';
import { TransformConfig } from '../interfaces/transformconfig';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://api:5000/v1';  // URL to web api
  private frost_apiUrl = 'http://localhost:8080/FROST-Server/v1.1/Things';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  create_config(transform_config: TransformConfig): Observable<TransformConfig> {
    return this.http.post<TransformConfig>(this.apiUrl+"/config",transform_config , this.httpOptions )
    .pipe(
      tap(_ => this.log('post config')),
      catchError(this.handleError<TransformConfig>('create_config', transform_config ))
    );
  }

  run_process(config_response: any): Observable<TransformConfig> {

    return this.http.post<TransformConfig>(this.apiUrl+"/process", config_response, this.httpOptions )
    .pipe(
      tap(_ => this.log('run_process')),
      catchError(this.handleError<TransformConfig>('run_process', config_response ))
    );
  }
  post_to_frost_server(config_response: any): Observable<TransformConfig> {


    if (config_response.Datastreams && config_response.Datastreams.length === 0){
      delete config_response.Datastreams;
    }
    if (config_response.Locations && config_response.Locations.length === 0){
      delete config_response.Locations;
    }



    return this.http.post<TransformConfig>(this.frost_apiUrl,config_response , this.httpOptions )
    .pipe(
      tap(_ => this.log('post convert')),
      catchError(this.handleError<TransformConfig>('run_convert', config_response ))
    );
  }

  run_convert(transform_config: TransformConfig): Observable<TransformConfig> {

    let payload = {
      source:transform_config.settings.source,
      config:transform_config.settings.file
    }

    return this.http.post<TransformConfig>(this.apiUrl+"/convert",payload , this.httpOptions )
    .pipe(
      tap(_ => this.log('post convert')),
      catchError(this.handleError<TransformConfig>('run_convert', payload ))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  
}
/** Log a HeroService message with the MessageService */
private log(message: string) {
  // this.messageService.add(`HeroService: ${message}`);
}
  
}


