import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchService } from './book-search.service';
import {SharedModule} from '../shared/shared.module';
import { BookPageComponent } from './book-page/book-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    BookPageComponent,
  ],
  providers: [
    BookSearchService
  ],
  exports: [
    BookPageComponent,
  ]
})
export class BooksModule { }
