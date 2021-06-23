import { catchError, map } from 'rxjs/operators';
import { Serie } from './serie.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  baseUrl = 'http://localhost:3001/series'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']      
    })
  }

  create(serie: Serie): Observable<Serie>{
    return this.http.post<Serie>(this.baseUrl, serie).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );    
  }

  read(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );    
  }

  readById(id: string): Observable<Serie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Serie>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );    
  }

  update(serie: Serie): Observable<Serie> {
    const url = `${this.baseUrl}/${serie.id}`;
    return this.http.put<Serie>(url, serie).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );    
  }

  delete(id: number): Observable<Serie> {   
    const url = `${this.baseUrl}/${id}`; 
    return this.http.delete<Serie>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );    
  }  

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true) 
    return EMPTY;
  }

}
