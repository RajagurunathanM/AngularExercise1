export class Student
{
  constructor(fname:string,lname:string,email:string,phoneno:number)
  {
    this.firstname = fname;
    this.lastname = lname;
    this.emailaddress = email;
    this.phonenumber = phoneno;
  }

  firstname:string;
  lastname:string;
  emailaddress:string;
  phonenumber:number;
}