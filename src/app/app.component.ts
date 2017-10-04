import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app-state';
import {selectRouterUrl} from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
