import { SeriesDeleteComponent } from './components/series/series-delete/series-delete.component';
import { SeriesUpdateComponent } from './components/series/series-update/series-update.component';
import { SeriesReadComponent } from './components/series/series-read/series-read.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesCreateComponent } from './components/series/series-create/series-create.component';
import { HomeComponent } from './views/home/home.component';
import { SeriesCrudComponent } from './views/series-crud/series-crud.component';


const routes: Routes = [
  {
    path: "",
    component:  HomeComponent
  },
  {
    path: "series",
    component: SeriesCrudComponent
  },
  {
    path: "series/create",
    component: SeriesCreateComponent
  },
  {
    path: "series/read",
    component: SeriesReadComponent
  },
  {
    path: "series/update/:id",
    component: SeriesUpdateComponent
  },
  {
    path: "series/delete/:id",
    component: SeriesDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
