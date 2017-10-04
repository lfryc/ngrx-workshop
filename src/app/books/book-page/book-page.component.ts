import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BookSearchService} from '../book-search.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Book} from '../book';

@Component({
  selector: 'a-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPageComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {

  }

}
