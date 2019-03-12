import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatGridListModule, // for grid column
    Material.MatFormFieldModule, //form
    Material.MatInputModule, //input
    Material.MatRadioModule, //mat-radio-group - radio button
    Material.MatDatepickerModule, //matDatepicker - datepicker
    Material.MatNativeDateModule, //required for datepicker
    Material.MatSelectModule, //mat-select - dropdown
    Material.MatCheckboxModule, //mat-checkbox - checkbox
    Material.MatButtonModule, // for button
    Material.MatPaginatorModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatProgressSpinnerModule,
    Material.MatToolbarModule,
    Material.MatSidenavModule,
    Material.MatTabsModule,
    Material.MatTableModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatDialogModule
  ],
  exports:[
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatPaginatorModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatProgressSpinnerModule,
    Material.MatToolbarModule,
    Material.MatSidenavModule,
    Material.MatTabsModule,
    Material.MatTableModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatDialogModule
  ]
})
export class MaterialModule { }
