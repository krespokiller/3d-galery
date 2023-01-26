import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelListRoutingModule } from './model-list-routing.module';
import { ModelComponent } from '../../components/model/model.component';
import { ModelListComponent } from '../../components/model-list/model-list.component';


@NgModule({
  declarations: [ModelListComponent,ModelComponent],
  imports: [
    CommonModule,
    ModelListRoutingModule
  ]
})
export class ModelListModule { }
