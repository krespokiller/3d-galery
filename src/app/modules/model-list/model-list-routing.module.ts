import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelListComponent } from '../../components/model-list/model-list.component';

const routes: Routes = [
  { path: '',
    component:ModelListComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelListRoutingModule { }
