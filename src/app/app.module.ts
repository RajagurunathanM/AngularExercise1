import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TemplateFormComponent } from './templateform/templateform.component';
import { OddEvenPipeComponent } from './oddorevenpipe/oddevenpipe.component';
import { ScrollComponent } from './scrolldirective/scrolldirective.component';

import { ScrollDirective } from './scrolldirective/scrolldetect.directive';
import { OddorEvenPipe } from './oddorevenpipe/oddoreven.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TemplateFormComponent, OddEvenPipeComponent, ScrollComponent,ScrollDirective, OddorEvenPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
