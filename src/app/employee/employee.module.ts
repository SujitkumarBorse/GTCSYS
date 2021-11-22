import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from '../file-upload/file-upload.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
];

@NgModule({
  declarations: [
    EmployeeComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule {
  constructor() {
    console.log('EmployeeModule Loaded');
  }
}
