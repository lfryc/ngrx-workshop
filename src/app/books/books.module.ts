import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchService } from './book-search.service';
import {SharedModule} from '../shared/shared.module';
import { BookPageComponent } from './book-page/book-page.component';
import {BookSearchResultsComponent} from './book-search-results/book-search-results.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    BookPageComponent,
    BookSearchResultsComponent,
  ],
  providers: [
    BookSearchService
  ],
  exports: [
    BookPageComponent,
  ]
})
export class BooksModule { }
