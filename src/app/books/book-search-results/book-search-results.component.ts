import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'a-book-search-results',
  templateUrl: './book-search-results.component.html',
  styleUrls: ['./book-search-results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchResultsComponent implements OnInit {

  @Input() loading: boolean;
  @Input() searchResults: Book[];

  constructor() { }

  ngOnInit() {
  }

}
