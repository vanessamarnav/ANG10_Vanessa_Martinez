import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { InitLayoutComponent } from './share/init-layout/init-layout.component';
import { AdminLayoutComponent } from './share/admin-layout/admin-layout.component';
import { NavbarComponent } from './share/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InitLayoutComponent,
    AdminLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
