import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamelCaseComponent } from './camel-case/camel-case.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [{path:'',component:CamelCaseComponent},{path:'form',component:ReactiveFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
