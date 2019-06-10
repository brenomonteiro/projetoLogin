import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdListComponent } from './cd-list/cd-list.component';
import { cdsRouting } from './cd.routing';
import { FormsModule } from '@angular/forms';
import { CdsService } from './cds.service';
import { CdFormComponent } from './cd-form/cd-form.component';
import { CdCrudComponent } from './cd-crud/cd-crud.component';

@NgModule({
  imports: [
    CommonModule, cdsRouting, FormsModule
  ],
  declarations: [CdListComponent, CdFormComponent, CdCrudComponent],
  providers: [CdsService]
})
export class CdsModule { }
