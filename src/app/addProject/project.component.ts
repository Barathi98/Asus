import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  dept:ProjectComponent[];
  constructor(private projectService:ProjectService)
  { 


  }

 ngOnInit(): void
  {
 }

 registerProject(regData:NgForm)
 {
   console.log(regData.value);
   this.projectService.addProject(regData.value).subscribe(data=>
     {console.log(data)});
 }

}
