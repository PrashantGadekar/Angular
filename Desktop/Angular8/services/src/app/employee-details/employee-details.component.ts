import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-details',
  template: `
              <ul *ngFor = "let employee of employees"> 
                  <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
              </ul>   
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees=[];
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() { 
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data)
  }

}
