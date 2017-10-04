import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfPageComponent } from './shelf-page/shelf-page.component';
import { BooksFromShelfPipe } from './books-from-shelf.pipe';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ShelfPageComponent, BooksFromShelfPipe],
  exports: [ShelfPageComponent]
})
export class ShelfModule { }
