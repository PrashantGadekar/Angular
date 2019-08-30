import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
             <h1>Hello World</h1>
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public name ="John Wick : Parabellum";

}
