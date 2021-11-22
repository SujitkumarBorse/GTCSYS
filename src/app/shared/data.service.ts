import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // allData: any = {
  //   "employeeData": [
  //     {
  //       "empName": "sujit",
  //       "empCode": "sadsada",
  //       "empFile": "true"
  //     },
  //     {
  //       "empName": "amol",
  //       "empCode": "sadsada",
  //       "empFile": "false"
  //     },
  //     {
  //       "empName": "Prashant",
  //       "empCode": "sadsada",
  //       "empFile": "true"
  //     },
  //     {
  //       "empName": "akash",
  //       "empCode": "sadsada",
  //       "empFile": "true"
  //     }
  //   ],
  //   "departmentData": [
  //     {
  //       "dptName": "sujit",
  //       "dptCode": "sadsada",
  //       "dptFile": "false"
  //     },
  //     {
  //       "dptName": "amol",
  //       "dptCode": "sadsada",
  //       "dptFile": "true"
  //     },
  //     {
  //       "dptName": "Prashant",
  //       "dptCode": "sadsada",
  //       "dptFile": "false"
  //     },
  //     {
  //       "dptName": "Prakash",
  //       "dptCode": "sadsada",
  //       "dptFile": "true"
  //     }
  //   ]
  // }
  // Url = "../../assets/data/data.json";

  constructor(private _httpClient: HttpClient) { }

  // getAll() {
  //   // return this._httpClient.get(Url);
  //   return this.allData;
  // }

  // create(data: any) {
  //   console.log("ddddddddddddddddaaaaaaaaaaaa", data);
  //   // return this._httpClient.post(this.Url, data);
  //   if (data.typeofData === 'employee') {
  //     return this.allData.employeeData.unshift(data.data);
  //   } else if (data.typeofData === 'department') {
  //     return this.allData.departmentData.unshift(data.data);
  //   }
  // }

}
