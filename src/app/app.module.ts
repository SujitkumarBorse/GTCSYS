import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DataService } from './shared/data.service';
// import { DepartmentModule } from './department/department.module';
// import { EmployeeModule } from './employee/employee.module';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'employee',
    loadChildren: () => import(`./employee/employee.module`).then(
      module => module.EmployeeModule
    )
  },
  {
    path: 'department',
    loadChildren: () => import(`./department/department.module`).then(
      module => module.DepartmentModule
    )
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    // FileUploadComponent
  ],
  imports: [
    BrowserModule,
    // EmployeeModule,
    // DepartmentModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DataService],  
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule Loaded');
  }
}
