import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DepartmentC } from './department-c';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl="http://localhost:8080/api/department";

  constructor(private httpCilent:HttpClient) 
  { }

  getDepartmentList():Observable<DepartmentC[]>
  {
    return this.httpCilent.get<DepartmentC[]>(this.baseUrl+"/");
  }
  addDepartment(department:NgForm)
  {
      return this.httpCilent.post(this.baseUrl,department);
  }
  deleteDepartment(id:number)
  {
        
  }
}
