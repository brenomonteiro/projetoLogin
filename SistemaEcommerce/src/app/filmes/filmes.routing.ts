import { Routes, RouterModule } from '@angular/router'
// import { FilmeListComponent } from './filme-list/filme-list.component'
// import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmeCrudComponent } from './filme-crud/filme-crud.component';

const FILMES_ROUTES: Routes = [
    {
        path: '',
        // component: FilmeListComponent
        component: FilmeCrudComponent
    }, {
        path: ':id',
        component: FilmeCrudComponent
    }
]

export const filmesRouting = RouterModule.forChild(FILMES_ROUTES)