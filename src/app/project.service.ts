import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 private baseUrl="http://localhost:8080/api/department/1/project"
  constructor(private httpClient:HttpClient) { }
  getProjectList():Observable<Project[]>
  {
     return this.httpClient.get<Project[]>(this.baseUrl+"/");
  }
  addProject(project:NgForm)
  {
    return this.httpClient.post(this.baseUrl,project);
  }
  deleteProject(id:number)
  {
    
  }
}
