import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeData } from './employee-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private baseUrl="http://localhost:8080/api/employeeDetails";
  private baseUrl1=" http://localhost:8080/api/department/2/project/1/employeeDetails";
  private baseUrl2 ="http://localhost:8080/api/department";
  constructor(private httpClient:HttpClient) 
  { }
getEmployeeList():Observable<EmployeeData[]>
{
  return this.httpClient.get<EmployeeData[]>(this.baseUrl);
}

addEmployee(EmployeeData:NgForm)
{
//   this.httpClient.post(this.baseUrl2+"/")
 }

}
