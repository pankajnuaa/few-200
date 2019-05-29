import { Component } from '@angular/core';
import { TodoListItem } from './model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class ToDoListComponent {
  items: TodoListItem[] = [
    { description: 'fix front door', completed: false },
    { description: 'Change lightbulb', completed: true },
    { description: 'Pay for the trip', completed: true }
  ];

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(what: HTMLInputElement) {
    console.log(what.value);
    this.items.unshift({ description: what.value, completed: false });
    what.value = '';
    what.focus();
  }

  clearCompleted() {
    this.items = this.items.filter(item => item.completed === false);
  }
}
