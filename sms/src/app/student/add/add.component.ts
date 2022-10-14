import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id: number = 0;
  studentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private studentService: StudentService) 
    {
      this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: [0, [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      address: ['', [Validators.required]],
      id: [0, [Validators.required]]
    });

  }

  ngOnInit(): void {    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.studentForm.get('Id')?.setValue(params['id']);
        const data = this.studentService.getStudentById(this.id);
        if (data) {
          this.studentForm.setValue(data);
        }
      }
    });
  }

  save() {
    if (this.studentForm.invalid)
      return

    if (this.studentForm.get('id')?.value === 0) {
      this.studentService.addStudent(this.studentForm.value);
    } else {
      this.studentService.updateStudent(this.studentForm.value);
    }
    this.router.navigate(['/list']);
  }

}