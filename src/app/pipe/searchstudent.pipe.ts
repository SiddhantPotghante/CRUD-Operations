import { Pipe, PipeTransform } from '@angular/core';
import { student } from "../student/student";

@Pipe({
  name: 'searchstudent'
})
export class searchstudentPipe implements PipeTransform {

  transform(items: student[], searchstudent: string): any[] {
    console.log(items)
    if(!items) return [];
    if(!searchstudent) return items;
    searchstudent = searchstudent.toLowerCase();
    console.log(searchstudent)
return items.filter( item => {
     // return it.employeeId==parseInt(searchstudent);
      return ((item.studentId.toLowerCase().includes(searchstudent)) || 
      (item.studentName.toLowerCase().includes(searchstudent)) ||
      (item.contactNo.toLowerCase().includes(searchstudent)) ||
      (item.studentEmailId.toLowerCase().includes(searchstudent)));
      

    });
   }

}
