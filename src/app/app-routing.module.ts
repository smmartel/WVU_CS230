import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccrodianComponent } from './accrodian/accrodian.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SentComponent } from './sent/sent.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './sign-in/signup/signup.component';
import { SnoozedComponent } from './snoozed/snoozed.component';
import { StarredComponent } from './starred/starred.component';

const routes: Routes = [
  { path: 'inbox', component: AccrodianComponent },
  { path: 'sent', component: SentComponent },
  { path: 'snoozed', component: SnoozedComponent },
  { path: 'drafts', component: DraftsComponent },
  { path: 'starred', component: StarredComponent },
  { path: 'login', component: SignInComponent },
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
