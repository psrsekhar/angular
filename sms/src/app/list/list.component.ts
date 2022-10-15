import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    studentList: Student[] = [];
    first = 0;
    rows = 10;
    constructor(private studentService: StudentService) {}
    ngOnInit(): void {
        this.studentList = this.studentService.getAllStudents();
    }
    next() {
        this.first = this.first + this.rows;
    }
    prev() {
        this.first = this.first - this.rows;
    }
    reset() {
        this.first = 0;
    }
    isLastPage(): boolean {
        return this.studentList ? this.first === (this.studentList.length - this.rows) : true;
    }
    isFirstPage(): boolean {
        return this.studentList ? this.first === 0 : true;
    }
    remove(id: number) {
        this.studentService.deleteStudent(id);
        this.studentList = this.studentService.getAllStudents();
    }
}