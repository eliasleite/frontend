import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
