import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataListComponent } from './employee-data-list/employee-data-list.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ProjectComponent } from './addProject/project.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataListComponent,
    AddemployeeComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    ProjectComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
