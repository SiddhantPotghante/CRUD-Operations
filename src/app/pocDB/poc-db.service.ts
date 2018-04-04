import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { student } from "../student/student";

@Injectable()
export class PocDbService {

  students = [];

  private mongoURL: string = "https://api.mongolab.com/api/1/databases/imuonspocdb/collections/";
  private apiKey: string = "8CElfGmeiIwc5errIFY3flpWvqq_HZnc";
  private studentsCollection: string = "students";
  private studentsConnectionString: string = this.mongoURL + this.studentsCollection + "?apiKey=" + this.apiKey;


  constructor(private _http: HttpClient) { }

  data;
  mongoSelectAll(): Observable<student[]> {

    this.data = this._http.get<student[]>(this.studentsConnectionString);
    console.log(this.data);
    return this.data;
  }

  mongoFindOnestudent(id: string): Observable<student[]> {
    console.log(id);
    return this._http.get<student[]>(this.studentsConnectionString + '&q={"studentId":"' + id + '"}');
  }

  mongoCountstudents(): Observable<student[]> {
    return this._http.get<student[]>(this.studentsConnectionString + '&c=true');
  }

  mongoInsert(fileObj) {
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    console.log(fileObj);
    var abc = JSON.stringify(fileObj);
    console.log(JSON.stringify(fileObj));
    return this._http.post(this.studentsConnectionString,
      //JSON.stringify(fileObj), //{"x":1, "y":2}
      // {"x":1, "y":2},
      fileObj,
      { headers: headers }
    );
  }

  mongoDelete(mongoID) {
    return this._http.delete(this.mongoURL + this.studentsCollection + "/" + mongoID + '?apiKey=' + this.apiKey);
  }

  mongoUpdate(mongoID: string, newValueObj) {
    console.log(newValueObj);
    console.log(mongoID);
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this._http.put(this.mongoURL + this.studentsCollection + "/" + mongoID + '?apiKey=' + this.apiKey, //{"_id":123}
    // JSON.stringify({ "$set": newValueObj }), //{ "x": 3 }
    newValueObj,
      { headers: headers }
    );
  }

}
