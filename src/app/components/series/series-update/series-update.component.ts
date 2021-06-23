import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from './../series.service';
import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.module';

@Component({
  selector: 'app-series-update',
  templateUrl: './series-update.component.html',
  styleUrls: ['./series-update.component.css']
})
export class SeriesUpdateComponent implements OnInit {

  serie: Serie

  constructor(
    private serieService: SeriesService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.serieService.readById(id).subscribe(serie => {
      this.serie = serie
    })
  }

  updateSerie(): void{
    this.serieService.update(this.serie).subscribe(() => {
      this.serieService.showMessage('Produto Atualizado com sucesso!')
      this.router.navigate(["/series"])
    })
  }

  cancel(): void{
    this.router.navigate(["/series"])
  }

}
