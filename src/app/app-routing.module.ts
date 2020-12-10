import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { TemplateFormComponent } from './templateform/templateform.component';
import { OddEvenPipeComponent } from './oddorevenpipe/oddevenpipe.component';
import { ScrollComponent } from './scrolldirective/scrolldirective.component';
import { ReactiveFormComponent } from './reactiveform/reactiveform.component';
import { DashboardComponent } from './dashboard.component';

const appRoutes:Routes=[
  {path: '', component: DashboardComponent, pathMatch: 'full' },
  {path:'oddevenpipe',component:OddEvenPipeComponent},
  {path:'reactiveform',component:ReactiveFormComponent},
  {path:'scrolldirective',component:ScrollComponent},
  {path:'templateform',component:TemplateFormComponent}
]

@NgModule({
imports:[
      RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}