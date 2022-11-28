import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  student: IData = {
    name: 'Ashish',
    age: 23,
  };
  dropDownValue = "food";
  constructor() { }

  ngOnInit(): void {
  }

}
