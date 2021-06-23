import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from './../series.service';
import { Serie } from './../serie.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-delete',
  templateUrl: './series-delete.component.html',
  styleUrls: ['./series-delete.component.css']
})
export class SeriesDeleteComponent implements OnInit {

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

  excluirSerie(): void{    
    this.serieService.delete(this.serie.id).subscribe(() => {
      this.serieService.showMessage('Produto Excluído com sucesso!')
      this.router.navigate(["/series"])
    })    
  }

  cancel(): void{
    this.router.navigate(["/series"])
  }

}
