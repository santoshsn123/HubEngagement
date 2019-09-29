import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamelCaseComponent } from './camel-case/camel-case.component';
import { LeftPamelComponent } from './left-pamel/left-pamel.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CamelCaseComponent,
    LeftPamelComponent,
    CamelCasePipe,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
