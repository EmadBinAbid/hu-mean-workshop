import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ta-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list = [];

  @Output() itemDeleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  indexOfListItem(index)
  {
    this.itemDeleted.emit(index);
    console.log(index + " Emitted.");
  }
}
