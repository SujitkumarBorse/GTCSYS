import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadComponent } from 'src/app/file-upload/file-upload.component';
import { FileUploadService } from 'src/app/shared/file-upload.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employeeData: any = [];
  empForm: FormGroup;
  showMsg: boolean = false;
  progress: number = 0;

  constructor(public uploader: FileUploadService) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      "empName": new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      "empCode": new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      "empFile": new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.empForm.controls;
  }

  resetForm() {
    this.empForm.reset();
    (<HTMLInputElement>document.getElementById('empFile')).value = "";
  }

  
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('ffffffiiiiiiiiiilllllllllleeeeeeeeee',file);
    
    this.empForm.patchValue({
      "empFile": file
    });
    this.empForm.get('empFile').updateValueAndValidity()
  }

  // submit() {
  //   console.log('empFormmmmmmmmmmmm Data', this.empForm.value);
  //   const data = this.empForm.value;
  //   this.uploader.create({ data, typeofData: 'employee' })
  //   this.resetForm();
  //   this.showMsg = true;
  //   setTimeout(() => {
  //     this.showMsg = false;
  //   }, 2000);
  // }

  submit() {
    const data = this.empForm.value;
    this.uploader.create({ data, typeofData: 'employee' });
    this.uploader.uploadFile(this.empForm.value.empFile).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.progress}%`);

          this.resetForm();
          this.showMsg = true;
          setTimeout(() => {
            this.showMsg = false;
          }, 2000);
          
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, 2000);
      }
    });
 
  }


}
