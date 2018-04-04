import { Component, OnInit } from '@angular/core';
import { student } from "../student/student";
import { PocDbService } from "../pocDB/poc-db.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  localstudent= {
        studentId: "",
        studentName: "",
        studentEmailId: "",
        contactNo: "",
  }
  

  studenttoadd: student;

  constructor(private _http: HttpClient,
    private _PocDbService: PocDbService) { }



  addstudent(){
    
    console.log(this.localstudent);
    console.log(this.localstudent);
    this._PocDbService.mongoInsert(this.localstudent).subscribe();
    alert("Student added");
  }

}
