import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule, MdInput, MdInputModule, MdProgressSpinnerModule, MdSpinner,
  MdTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
  ],
  declarations: [
  ]
})
export class SharedModule { }
