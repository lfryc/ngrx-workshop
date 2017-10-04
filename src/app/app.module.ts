import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BooksModule} from './books/books.module';
import {StoreModule} from '@ngrx/store';
import {bookReducer} from './books/book.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
