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
import {routerReducer, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {ShelfModule} from './shelf/shelf.module';
import {BookPageComponent} from './books/book-page/book-page.component';
import {ShelfPageComponent} from './shelf/shelf-page/shelf-page.component';
import {CustomRouteStateSerializer} from './app.reducers';


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
    SharedModule,
    BooksModule,
    ShelfModule,
    RouterModule.forRoot([
      // { path: '', redirectTo: 'books', pathMatch: 'full' },
      // { path: 'books', component: BookPageComponent },
      // { path: 'shelf', component: ShelfPageComponent },
    ]),
    StoreModule.forRoot({
      // router: routerReducer,
      books: bookReducer,
      shelf: shelfReducer
    }, {
      metaReducers
    }),
    EffectsModule.forRoot([
      BookEffects
    ]),
    // StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),

  ],
  providers: [
    // { provide: RouterStateSerializer, useClass: CustomRouteStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
