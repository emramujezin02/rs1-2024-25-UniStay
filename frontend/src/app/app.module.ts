import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserAnimationsModule, // Potrebno za animacije
    BrowserModule,
    HttpClientModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel

  ],
  providers: [
    ]
})
export class AppModule {
}
