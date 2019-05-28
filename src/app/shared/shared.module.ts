import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SafePipe} from '@shared/pipes/safe.pipe';
import {StripHtmlPipe} from '@shared/pipes/strip-html.pipe';
import {TruncatePipe} from '@shared/pipes/truncate.pipe';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SafePipe,
    StripHtmlPipe,
    TruncatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SafePipe,
    TruncatePipe,
    StripHtmlPipe
  ]
})
export class SharedModule {}
