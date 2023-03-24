import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentC } from '../department-c';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

   dept:DepartmentC[];

  constructor(private departmentService:DepartmentService)
   { 


   }

  ngOnInit(): void
   {
  }

  registerDepartment(regData:NgForm)
  {
    console.log(regData.value);
    this.departmentService.addDepartment(regData.value).subscribe(data=>
      {console.log(data)});
  }

}
