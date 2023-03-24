import { Component, OnInit } from '@angular/core';
import { DepartmentC } from '../department-c';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {
  department:DepartmentC[];
  constructor(private departmentService:DepartmentService) 
  { }

  updateDepartment(id:number)
  {

  }

  deleteDepartment(id:number)
  {
    
  }
  ngOnInit(): void {

    this.departmentService.getDepartmentList().subscribe(data=>this.department=data);
  }
  
    
  

}
