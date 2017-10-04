import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Book} from '../book';
import {Store} from '@ngrx/store';
import {AppState} from '../../app-state';
import {getBookSearchInProgress, getBookSearchResults} from '../book.reducers';

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
