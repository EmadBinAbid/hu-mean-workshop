import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  inputFieldPlaceHolder = "Enter your Todo item here";
  inputButtonText = "Add";
  inputText = "Some text";
  
  constructor() { }

  ngOnInit() {
  }

}
