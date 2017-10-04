import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app-state';
import {getShelvedBooks} from '../shelf.reducers';

@Component({
  selector: 'a-shelf-page',
  templateUrl: './shelf-page.component.html',
  styleUrls: ['./shelf-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShelfPageComponent implements OnInit {

  shelvedBooks = this.store.select(getShelvedBooks);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

}
