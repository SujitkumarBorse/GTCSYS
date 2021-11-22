import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {


  @ViewChild('fileInput') fileInput;
  fileBrowser: any;
  constructor(public uploader: FileUploadService) { }

  ngOnInit() {
  }

  addToQueue() {
    this.fileBrowser = this.fileInput.nativeElement;
    // this.uploader.addToQueue(fileBrowser.files);
    console.log("fileBrowser", this.fileBrowser);
    console.log("fileBrowser files", this.fileBrowser.files);
  }


}
