import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
