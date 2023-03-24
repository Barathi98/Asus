import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDataListComponent } from './employee-data-list/employee-data-list.component';
import { ProjectComponent } from './addProject/project.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'employee',component:EmployeeDataListComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'department',component:DepartmentComponent},
  {path:'addDepartment',component:AddDepartmentComponent},
  {path:'addProject',component:ProjectComponent},
  {path:'project',component:ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
