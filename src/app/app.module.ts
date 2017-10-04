import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BooksModule} from './books/books.module';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {bookReducer} from './books/book.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from './books/book.effects';
import {shelfReducer} from './shelf/shelf.reducers';
import {localStorageSync} from 'ngrx-store-localstorage';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['shelf'],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BooksModule,
    StoreModule.forRoot({
      books: bookReducer,
      shelf: shelfReducer
    }, {
      metaReducers
    }),
    EffectsModule.forRoot([
      BookEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
