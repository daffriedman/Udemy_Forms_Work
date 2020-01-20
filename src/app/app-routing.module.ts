import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondFormComponent } from './comps/second-form/second-form.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'secondForm', component:SecondFormComponent},
  {path:'mainForm', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
