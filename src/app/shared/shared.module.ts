import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SafePipe} from '@shared/pipes/safe.pipe';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SafePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SafePipe
  ]
})
export class SharedModule {}
