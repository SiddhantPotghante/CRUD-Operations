import { Component, OnInit } from '@angular/core';
import { student } from "../student/student";
import { PocDbService } from "../pocDB/poc-db.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  localstudent= {
    studentId: "",
    studentName: "",
    studentEmailId: "",
    contactNo: "",
}
  searchstudent= "";
  incomingresult: student[] = [];

  constructor(
    private _http: HttpClient,
    private _PocDbService: PocDbService
  ) { }

  ngOnInit() {
  }

  deletecomponent(){
    this._PocDbService.mongoFindOnestudent(this.searchstudent).subscribe(
      data => {
        if (data.length > 0) {
          this._PocDbService.mongoDelete(data[0]._id.$oid).subscribe();
        }
      }
    );
    this.incomingresult.length=0 ;
    alert("Student Deleted");
    
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
