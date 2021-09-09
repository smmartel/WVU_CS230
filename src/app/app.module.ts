import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarPopoutComponent } from './sidebar-popout/sidebar-popout.component';
import { AccrodianComponent } from './accrodian/accrodian.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarPopoutComponent,
    AccrodianComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
