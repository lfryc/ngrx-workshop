import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Book} from '../../books/book';

@Component({
  selector: 'a-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {

  @Input() books: Book[];

  constructor() { }

  ngOnInit() {
  }

}
