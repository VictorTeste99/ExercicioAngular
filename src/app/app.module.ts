import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponeteComponent } from './segundo-componete/segundo-componete.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { CrudComponent } from './Componentes/crud/crud.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponeteComponent,
    NgIfForComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
