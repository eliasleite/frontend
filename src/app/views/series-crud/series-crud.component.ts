import { HeaderData } from './../../components/template/header/header-data-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-series-crud',
  templateUrl: './series-crud.component.html',
  styleUrls: ['./series-crud.component.css']
})
export class SeriesCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Séries',
      icon: 'tv',
      routeUrl: '/series'
    }
   }

  ngOnInit(): void {
  }

  goToCreateSerie(): void{

    this.router.navigate(['/series/create'])

    console.log('Navegando...')
  }

}
