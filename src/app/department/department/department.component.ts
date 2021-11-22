import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/shared/file-upload.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentData: any = [];
  form: FormGroup;
  showMsg: boolean = false;
  constructor(public uploader: FileUploadService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "dptName": new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      "dptCode": new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      "dptFile": new FormControl('', Validators.required)
    });
  }
  
  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    const data = this.form.value;
    this.uploader.create({ data, typeofData: 'department' })
    this.resetForm();
    this.showMsg = true;
    setTimeout(() => {
      this.showMsg = false;
    }, 1500)


    // console.log(this.form.value);
    // const data = this.form.value;
    // this.uploader.create(data).subscribe(res => {
    //   console.log('Post created successfully!', res);
    //   this.form.reset();
    //   this.showMsg = true;
    //   setTimeout(() => {
    //     this.showMsg = false;
    //   }, 1500);
    // }, error => {
    //   console.log(error);
    // });
  }

  resetForm(){
    this.form.reset();
  }


}
