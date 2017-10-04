import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule, MdInputModule, MdProgressSpinnerModule,
  MdTableModule
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
    MdTableModule,
    MdProgressSpinnerModule,
    MdCardModule,
  ],
  exports: [
    ReactiveFormsModule,
    MdInputModule,
    MdTableModule,
    MdProgressSpinnerModule,
    MdCardModule,
    BookListComponent,
  ],
  declarations: [
    BookListComponent,
  ]
})
export class SharedModule { }
