import {NgModule} from '@angular/core';
import {EditorComponent} from '@components/editor/editor.component';
import {AutosizeModule} from 'ngx-autosize';
import {SharedModule} from '@shared/shared.module';
import {MaterialModule} from '@shared/modules/material.module';

@NgModule({
  imports: [
    AutosizeModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    EditorComponent
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule {
}
