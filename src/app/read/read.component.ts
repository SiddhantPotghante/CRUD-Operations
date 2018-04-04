import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { student } from "../student/student";
import { searchstudentPipe } from "../pipe/searchstudent.pipe";
import { PocDbService } from "../pocDB/poc-db.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
@Pipe({ name: "searchstudentPipe" })
export class ReadComponent implements OnInit {

  searchstudent = null;

  constructor(private _http: HttpClient,
    private _PocDbService: PocDbService) { }


  students: student[] = [];
  SingleStudent: student[] = [];
  CountOfStudents = null;
  selectedStudent: student;

  ngOnInit() {

    this._PocDbService.mongoSelectAll().subscribe(
      data => { this.students = data; },
      err => console.log(err),
      () => console.log("Hiiiii")
    );

    this._PocDbService.mongoCountstudents().subscribe(
      data => this.CountOfStudents = data,
      err => console.log(err),
      () => console.log("Count here")
    );
    console.log(this.students);
  }

}
