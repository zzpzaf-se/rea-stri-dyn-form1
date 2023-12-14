import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { ItemQueryComponent } from './item-query/item-query.component';
import { HttpClientModule } from '@angular/common/http';
import { FormInputDynamicElementComponent } from './formDynamicComponents/form-input-dynamic-element/form-input-dynamic-element.component';
import { FormButtonDynamicElementComponent } from './formDynamicComponents/form-button-dynamic-element/form-button-dynamic-element.component';
import { DynamicFormModule } from './formDynamicComponents/dynamic-form.module';
import { ItemFormHostComponent } from './item-form-host/item-form-host.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemQueryComponent,
    ItemFormHostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule, 
    DynamicFormModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
