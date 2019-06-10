import { Routes, RouterModule } from '@angular/router'
// import { CdListComponent } from './cd-list/cd-list.component'
// import { CdFormComponent } from './cd-form/cd-form.component';
import { CdCrudComponent } from './cd-crud/cd-crud.component';

const CDS_ROUTES: Routes = [
    {
        path: '',
        // component: CdListComponent
        component: CdCrudComponent
    }, {
        path: ':id',
        component: CdCrudComponent
    }
]

export const cdsRouting = RouterModule.forChild(CDS_ROUTES)