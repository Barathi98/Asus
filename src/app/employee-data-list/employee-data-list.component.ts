import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../employee-data';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-data-list',
  templateUrl: './employee-data-list.component.html',
  styleUrls: ['./employee-data-list.component.css']
})
export class EmployeeDataListComponent implements OnInit {

  title:string
  employee:EmployeeData[];
  constructor(private employeeService:EmployeeDataService) { 
    this.title="Employee Management System";
  }
  updateEmployee(id:number)
  {
 
  }
  deleteEmployee(id:number)
  {

  }
  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(data=>this.employee=data);
   // this.employee=[
      //   {
      //       "employeeId": 1,
      //       "employeeFirstName": "Keerthana",
      //       "employeeLastName": "Ezhilarasan",
      //       "employeeMobileNumber": "8608967899",
      //       "employeeEmail": "keerthana@gmail.com",
      //       "employeeeAddress": "chennai,TamilNadu",
      //       "employeeBloodGroup": "A1-ve",
      //       "employeeDesignation": "Associate Software engineer",
      //       "employeeSalary": "28,000"
      //   },
      //   {
      //     "employeeId": 2,
      //     "employeeFirstName": "Barathi",
      //     "employeeLastName": "Karunakaran",
      //     "employeeMobileNumber": "8608967899",
      //     "employeeEmail": "barathi@gmail.com",
      //     "employeeeAddress": "chennai,TamilNadu",
      //     "employeeBloodGroup": "A1-ve",
      //     "employeeDesignation": "Associate Software engineer",
      //     "employeeSalary": "28,000"
      //   }
      // ];
  }

}
