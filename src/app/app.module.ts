import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TemplateFormComponent } from './templateform/templateform.component';
import { OddEvenPipeComponent } from './oddorevenpipe/oddevenpipe.component';
import { ScrollComponent } from './scrolldirective/scrolldirective.component';
import { ReactiveFormComponent } from './reactiveform/reactiveform.component';
import { DashboardComponent } from './dashboard.component';

import { ScrollDirective } from './scrolldirective/scrolldetect.directive';
import { OddorEvenPipe } from './oddorevenpipe/oddoreven.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, TemplateFormComponent, OddEvenPipeComponent, ScrollComponent,ScrollDirective, OddorEvenPipe, ReactiveFormComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
 