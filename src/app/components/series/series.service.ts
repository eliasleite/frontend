import { Serie } from './serie.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  baseUrl = 'http://localhost:3001/series'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string){
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(serie: Serie): Observable<Serie>{
    return this.http.post<Serie>(this.baseUrl, serie)
    
  }

  read(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseUrl)
  }
}
