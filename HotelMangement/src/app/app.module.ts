import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
//import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './common/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
 
  declarations: [
    AppComponent,
    HomeComponent
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    //ReactiveFormsModule,
    //MatFormFieldModule,
    SharedModule,
    BrowserAnimationsModule,
    //MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
