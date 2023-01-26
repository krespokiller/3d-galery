import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NoFoundComponent } from './components/no-found/no-found.component';

const routes: Routes = [
  { path: '',
    component:LayoutComponent,
    children:[
      { path:'',redirectTo:'/home',pathMatch:'full'},
      { path: 'home', loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule) },
      { path: 'list', loadChildren: () => import('./modules/model-list/model-list.module').then(m => m.ModelListModule) },
      { path: 'upload', loadChildren: () => import('./modules/upload/upload.module').then(m => m.UploadModule) },
    ]
  },

  { path: 'preview', loadChildren: () => import('./modules/preview/preview.module').then(m => m.PreviewModule) },

  {path:'**',component:NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
