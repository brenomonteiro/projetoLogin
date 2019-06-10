import { Routes, RouterModule } from '@angular/router'
import { LivroListComponent } from './livro-list/livro-list.component'
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroCrudComponent } from './livro-crud/livro-crud.component';

const LIVROS_ROUTES: Routes = [
    {
        path: '',
        // component: LivroListComponent
        component: LivroCrudComponent
    }, {
        path: ':id',
        component: LivroCrudComponent

    }
]

export const livroRouting = RouterModule.forChild(LIVROS_ROUTES)