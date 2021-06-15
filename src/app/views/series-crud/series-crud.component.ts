import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-series-crud',
  templateUrl: './series-crud.component.html',
  styleUrls: ['./series-crud.component.css']
})
export class SeriesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreateSerie(): void{

    this.router.navigate(['/series/create'])

    console.log('Navegando...')
  }

}
