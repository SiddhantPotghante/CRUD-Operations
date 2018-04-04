import { Istudent } from "./istudent";

export class student implements Istudent {
    constructor(){
        this.studentId= "";
        this.studentName= "";
        this.studentEmailId= "";
        this.contactNo= "";
        this._id.$oid= "";
    }
    studentId: "";
    studentName: string;
    studentEmailId: string;
    contactNo: string;
    _id:{$oid: string};
}