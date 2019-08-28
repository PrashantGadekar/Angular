import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
         
           <h2> {{name}}</h2>
           <h2> {{name | lowercase}}</h2>

  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name ="Codeevolution";
  public message ="Welcome to Codeevolution";
  public person={
    "firstName":"John",
    "lastName":"Doe"
  }
  
  constructor() { }

  ngOnInit() {
  }

  
}
