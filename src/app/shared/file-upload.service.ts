import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public url: string = 'https://jsonplaceholder.typicode.com/posts';
  // public url: string = 'http://dev-demo.gtcsys.com/file-upload.php';



  allData: any = {
    "employeeData": [
      {
        "empName": "sujit",
        "empCode": "sadsada",
        "empFile": "false"
      },
      {
        "empName": "amol",
        "empCode": "sadsada",
        "empFile": "true"
      },
      {
        "empName": "Prashant",
        "empCode": "sadsada",
        "empFile": "false"
      },
      {
        "empName": "Prakash",
        "empCode": "sadsada",
        "empFile": "true"
      }
    ],
    "departmentData": [
      {
        "dptName": "sujit",
        "dptCode": "sadsada",
        "dptFile": "false"
      },
      {
        "dptName": "amol",
        "dptCode": "sadsada",
        "dptFile": "true"
      },
      {
        "dptName": "Prashant",
        "dptCode": "sadsada",
        "dptFile": "false"
      },
      {
        "dptName": "Prakash",
        "dptCode": "sadsada",
        "dptFile": "true"
      }
    ]
  }

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.allData;
  }

  create(data: any) {
    if (data.typeofData === 'employee') {
      return this.allData.employeeData.unshift(data.data);
    } else if (data.typeofData === 'department') {
      return this.allData.departmentData.unshift(data.data);
    }
  }

  uploadFile(empFile: File): Observable<any> {
    var formData: any = new FormData();
    formData.append("file_name", empFile);
    return this.http.post(`${this.url}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
    
  }
 
}


