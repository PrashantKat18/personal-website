import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'otherInfo',
    loadChildren: () => import('./pages/other-info/other-info.module').then(m => m.OtherInfoModule)
  },
  {
    path:'projects', 
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path:'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactusModule)
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
