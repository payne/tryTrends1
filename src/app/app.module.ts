import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TrendModule } from 'ngx-trend';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricComponent } from './metric/metric.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricComponent
  ],
  imports: [
    BrowserModule,
    TrendModule,BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
