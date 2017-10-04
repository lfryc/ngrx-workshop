import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BooksModule} from './books/books.module';
import {StoreModule} from '@ngrx/store';
import {bookReducer} from './books/book.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from './books/book.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BooksModule,
    StoreModule.forRoot({
      books: bookReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
