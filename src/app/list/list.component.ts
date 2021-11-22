import { Component, OnInit } from '@angular/core';
import {FileUploadService } from '../shared/file-upload.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeData: any = [];
  departmentData: any = [];
  allNewData: any;

  constructor(public uploader: FileUploadService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.allNewData = this.uploader.getAll();
    this.employeeData = this.allNewData['employeeData'];
    this.departmentData = this.allNewData['departmentData'];
  }



}
