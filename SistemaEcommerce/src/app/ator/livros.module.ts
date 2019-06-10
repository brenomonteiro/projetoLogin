import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroListComponent } from './livro-list/livro-list.component';
import { livroRouting } from './livros.routing';
import { FormsModule } from '@angular/forms';
import { LivrosService } from './livros.service';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroCrudComponent } from './livro-crud/livro-crud.component';

@NgModule({
  imports: [
    CommonModule, livroRouting, FormsModule
  ],
  declarations: [LivroListComponent, LivroFormComponent, LivroCrudComponent],
  providers: [LivrosService]
})
export class LivrosModule { }
