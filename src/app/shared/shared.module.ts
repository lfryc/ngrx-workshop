import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule, MdInputModule, MdProgressSpinnerModule,
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BookListComponent} from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdCardModule,
  ],
  exports: [
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdCardModule,
    BookListComponent,
  ],
  declarations: [
    BookListComponent,
  ]
})
export class SharedModule { }
