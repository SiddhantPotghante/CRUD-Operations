import { Component, OnInit } from '@angular/core';
import { student } from "../student/student";
import { PocDbService } from "../pocDB/poc-db.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  localstudent= {
    studentId: "",
    studentName: "",
    studentEmailId: "",
    contactNo: "",
}
  searchstudent= "";
  incomingresult: student[] = [];

  constructor(private _http: HttpClient,
              private _PocDbService: PocDbService) { }

  ngOnInit() {
  }

  updatestudent(){
    this.localstudent.studentId = this.incomingresult[0].studentId;
    this.localstudent.studentName = this.incomingresult[0].studentName;
    this.localstudent.studentEmailId = this.incomingresult[0].studentEmailId;
    this.localstudent.contactNo = this.incomingresult[0].contactNo;
    this._PocDbService.mongoFindOnestudent(this.searchstudent).subscribe(
      data => {
        if (data.length > 0) {
          this._PocDbService.mongoUpdate(data[0]._id.$oid, this.localstudent).subscribe();
        }
      }
    );
    this.incomingresult.length=0 ;
    alert("Student Updated");
  }

  searchcomponent(){
    console.log(this.searchstudent);
    this._PocDbService.mongoFindOnestudent(this.searchstudent).subscribe(
      data => {this.incomingresult = data;},
      err => console.log(err),
      ()=> console.log(this.incomingresult)
    );
  }

}
