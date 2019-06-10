import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './login/login-guard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule',
        canActivate: [AuthGuard]
    }, {
        path: 'cds',
        loadChildren: 'app/cds/cds.module#CdsModule',
        canActivate: [AuthGuard]
    }, {
        path: 'filmes',
        loadChildren: 'app/filmes/filmes.module#FilmesModule',
        canActivate: [AuthGuard]
        }, {
        path: 'livros',
        loadChildren: 'app/livros/livros.module#LivrosModule',
        canActivate: [AuthGuard]
    }, {
        path: 'signin',
        component: LoginComponent
    }
]

export const RoutingModule = RouterModule.forRoot(routes)