import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  register(regData:NgForm)
  {
     console.log(regData.value);
  }

}
