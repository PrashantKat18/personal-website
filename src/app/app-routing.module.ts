import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutComponent } from './pages/about/about.component';
// import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { ContactusComponent} from './pages/contactus/contactus.component';
import { ProjectComponent } from './pages/project/project.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component'
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OtherInfoComponent } from './pages/other-info/other-info.component';
import { ActivateGuard } from './guard/activate.guard'
import { ActivatechildguardGuard } from './guard/activatechildguard.guard'
import { SettingComponent } from './pages/setting/setting.component';
import { AddUserComponent } from './pages/setting/add-user/add-user.component';
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
    component:ProjectComponent,canActivate:[ActivateGuard]
  },
  // {
  //   path:'otherInfo', 
  //   component:OtherInfoComponent
  // },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },

  {
    path:'setting',
    component:SettingComponent, canActivateChild:[ActivatechildguardGuard],
    children:[
    {
      path:'addUser',
      component:AddUserComponent
    },
  ]},

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
