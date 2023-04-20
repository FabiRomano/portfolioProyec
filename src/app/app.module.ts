import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
