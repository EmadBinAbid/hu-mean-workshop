import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  inputFieldPlaceHolder = "Enter your Todo item here";
  inputButtonText = "Add";
  inputText = "";
  
  @Output() itemAdded = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addItem()
  {
    this.itemAdded.emit(this.inputText);
    this.inputText = "";
  }

}
