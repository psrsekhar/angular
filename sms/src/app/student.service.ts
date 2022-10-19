import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: Student[] = [
    {
      id: 1,
      name: "Abc",
      email: "abc@def.com",
      address: "Nandyal, A.p",
      phno: 9123456789,
      department: "ece"
    },
    {
      id: 2,
      name: "Def",
      email: "ghi@jkl.com",
      address: "Nandyal, A.p",
      phno: 8123456789,
      department: "ece"
    }    
  ];
  constructor() { }
  getAllStudents(){
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
    if(index != undefined && index != null){
      this.studentList[index] = student;
    }
  }

  deleteStudent(id: number){
    this.studentList = this.studentList.filter(x => x.id != id);
  }
}
