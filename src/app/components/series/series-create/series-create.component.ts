import { Serie } from './../serie.module';
import { Router } from '@angular/router';
import { SeriesService } from './../series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-create',
  templateUrl: './series-create.component.html',
  styleUrls: ['./series-create.component.css']
})
export class SeriesCreateComponent implements OnInit {

  serie: Serie = {
    name: "",
    nota: null
  }

  constructor(private seriesService: SeriesService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createSerie(): void {
    this.seriesService.create(this.serie).subscribe(() => {
      this.seriesService.showMessage("Série cadastrada!")
      this.router.navigate(['/series'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/series'])
  }

}
