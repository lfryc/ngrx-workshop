import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../books/book';

@Pipe({
  name: 'booksFromShelf'
})
export class BooksFromShelfPipe implements PipeTransform {

  transform(shelvedBooks: { [id: string]: Book }, args?: any): any {
    return Object.values(shelvedBooks);
  }

}
