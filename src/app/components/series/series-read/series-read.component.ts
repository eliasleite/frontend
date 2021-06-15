import { SeriesService } from './../series.service';
import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.module';

@Component({
  selector: 'app-series-read',
  templateUrl: './series-read.component.html',
  styleUrls: ['./series-read.component.css']
})
export class SeriesReadComponent implements OnInit {

  series: Serie[]
  displayedColumns = ['id', 'name', 'nota']

  constructor(private serieService: SeriesService) { }

  ngOnInit(): void {
    this.serieService.read().subscribe(series => {
      this.series = series;    
      // console.log(series)  
    })
  }



}
