import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSidenavModule,
  MatToolbarModule, MatTabsModule, MatExpansionModule, MatCheckboxModule, MatTableModule, MatSelectModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatTabsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule
  ],
})

export class MaterialModule {
}
