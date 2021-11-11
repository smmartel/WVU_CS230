import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarPopoutComponent } from './sidebar-popout/sidebar-popout.component';
import { AccrodianComponent } from './accrodian/accrodian.component';
import { LayoutComponent } from './layout/layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DraftsComponent } from './drafts/drafts.component';
import { StarredComponent } from './starred/starred.component';
import { SentComponent } from './sent/sent.component';
import { SnoozedComponent } from './snoozed/snoozed.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailLayout } from './accrodian/email-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { SignupComponent } from './sign-in/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarPopoutComponent,
    AccrodianComponent,
    LayoutComponent,
    SignInComponent,
    DraftsComponent,
    StarredComponent,
    SentComponent,
    SnoozedComponent,
    EmailLayout,
    UserInfoComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'gmail-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
