import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 title:String
 project:Project[];
  constructor(private projectService:ProjectService) { 
    this.title="Employee Management System";
  }

  updateProject(id:number)
  {
 
  }
  deleteProject(id:number)
  {

  }
  ngOnInit(): void {
    this.projectService.getProjectList().subscribe(data=>this.project=data);
  }

}
