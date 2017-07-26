import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap';
import { Ng2Bs3ModalModule, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TypeaheadModule } from 'ngx-bootstrap';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditinfoComponent } from './components/editinfo/editinfo.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { ValidateService } from './services/validate.service'
import { AuthService } from './services/auth.service'

const appRoutes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'editinfo', component: EditinfoComponent},
 {path: 'adduser', component: AdduserComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'login', component: LoginComponent},
 {path: 'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditinfoComponent,
    AdduserComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TypeaheadModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    Ng2Bs3ModalModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
