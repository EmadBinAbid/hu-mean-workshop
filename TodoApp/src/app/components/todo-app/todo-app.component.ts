import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  title = "Todo App";
  mainText = "Just focus on your work, and let this App remember the jobs for you.";

  todoList = [
    {
      todo: "Learn Angular",
      done: false
    },
    {
      todo: "Learn Node.js",
      done: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
