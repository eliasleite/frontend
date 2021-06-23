import { SeriesUpdateComponent } from './components/series/series-update/series-update.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SeriesReadComponent } from './components/series/series-read/series-read.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatCardModule} from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { SeriesCrudComponent } from './views/series-crud/series-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { SeriesCreateComponent } from './components/series/series-create/series-create.component' 
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'  
import { SeriesDeleteComponent } from './components/series/series-delete/series-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SeriesCrudComponent,
    RedDirective,
    ForDirective,
    SeriesCreateComponent,
    SeriesReadComponent,
    SeriesUpdateComponent,
    SeriesDeleteComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
