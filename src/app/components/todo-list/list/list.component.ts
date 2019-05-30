
import { TodoListItem } from '../model';

import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: TodoListItem[];
  @Output() markedCompleted = new EventEmitter<TodoListItem>();
  @Output() completedCleared = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {
    this.markedCompleted.emit(item);
  }

  clearCompleted() {
    this.completedCleared.emit();
  }


}
