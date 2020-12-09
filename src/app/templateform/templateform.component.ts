import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Student } from './Student';

@Component({
  selector:'template-form',
  templateUrl:'./templateform.component.html',
  styleUrls:['./templateform.component.css']
})
export class TemplateFormComponent
{
  constructor()
  {
  }
  studentList:Student[]=[];

  firstname:string;
  lastname:string;
  emailaddress:string;
  phonenumber:number;
  
  onSubmit()
  {
    alert('Student Form Submitted successfully');
    this.studentList.push(new Student(this.firstname,this.lastname,this.emailaddress,this.phonenumber));
    console.log(this.firstname+" "+this.lastname+" "+this.emailaddress+" "+this.phonenumber);
    console.log(this.studentList[this.studentList.length-1]);
  }
  
}