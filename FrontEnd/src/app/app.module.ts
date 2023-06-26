import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { PagComponent } from './components/pag/pag.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PagComponent,
    SobreMiComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    ExperienceComponent,
    
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
