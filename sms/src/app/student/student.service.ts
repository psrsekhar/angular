import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService 
{
  private studentList: Student[] = [
    {
      id:1,
      name:"Abc",
      email: "abc@def.com",
      mobile: 9000000000,
      address: "Nandyal, Kurnool"
    },
    {
      id:2,
      name:"Ghi",
      email: "ghi@jkl.com",
      mobile: 9000000001,
      address: "Nandyal, Kurnool"
    }    
  ];
  constructor() { }
  getAllStudents()  {
    return this.studentList;
  }

  getStudentById(id: number){
    return this.studentList.find(x => x.id == id);
  }

  addStudent(student: Student){
    student.id = new Date().getTime();
    this.studentList.push(student);
  }

  updateStudent(student: Student){
    const index = this.studentList.findIndex(x => x.id == student.id);
    if(index != null && index != undefined){
      this.studentList[index] = student;
    }
  }

  removeStudent(id: number){
    this.studentList = this.studentList.filter(x => x.id != id);
  }
}