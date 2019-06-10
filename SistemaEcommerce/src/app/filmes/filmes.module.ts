import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { filmesRouting } from './filmes.routing';
import { FormsModule } from '@angular/forms';
import { FilmesService } from './filmes.service';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmeCrudComponent } from './filme-crud/filme-crud.component';

@NgModule({
  imports: [
    CommonModule, filmesRouting, FormsModule
  ],
  declarations: [FilmeListComponent, FilmeFormComponent, FilmeCrudComponent],
  providers: [FilmesService]
})
export class FilmesModule { }
