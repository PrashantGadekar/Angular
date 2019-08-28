import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>`,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  logMessage(value){
    console.log(value);
  }

  ngOnInit() {
  }

}
