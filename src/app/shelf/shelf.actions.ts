import {Book} from '../books/book';

export const SHELF_ADD_BOOK = '[Shelf] Add Book';
export const SHELF_REMOVE_BOOK = '[Shelf] Remove Book';

export class ShelfAddBook {
  type = SHELF_ADD_BOOK;
  constructor(public payload: Book) {}
}

export class ShelfRemoveBook {
  type = SHELF_REMOVE_BOOK;
  constructor(public payload: Book) {}
}

export type ShelfAction =
  | ShelfAddBook
  | ShelfRemoveBook;
