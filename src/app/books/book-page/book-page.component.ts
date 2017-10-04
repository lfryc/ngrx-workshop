import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BookSearchService} from '../book-search.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Book} from '../book';
import {AppState} from '../../app-state';
import {Store} from '@ngrx/store';
import {getBookSearchResults} from '../book.reducers';
import {BookSearch, BookSearchResult} from '../book.actions';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'a-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPageComponent implements OnInit, OnDestroy {

  queryTitleFormControl = new FormControl();

  subscriptions: Subscription[];

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.subscriptions = [
      this.queryTitleFormControl.valueChanges
        .subscribe((queryTitle) => {
          this.store.dispatch(new BookSearch({ queryTitle }));
        })
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
