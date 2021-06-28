import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApplyComponent } from './pages/apply/apply.component';
// import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddProvider } from './services/add';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatExpansionModule } from '@angular/material';
import { MessageComponent } from './components/message/message.component';
import { OtherInfoComponent } from './pages/other-info/other-info.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AddUserComponent } from './pages/setting/add-user/add-user.component';
import { SettingComponent } from './pages/setting/setting.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplyComponent,
    // AboutComponent,
    ProjectComponent,
    ContactusComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MessageComponent,
    // OtherInfoComponent,
    AddUserComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    PerfectScrollbarModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [
    AddProvider, CookieService,
    // PERFECT_SCROLLBAR_CONFIG,
    // useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  ],
  entryComponents: [
    MessageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
