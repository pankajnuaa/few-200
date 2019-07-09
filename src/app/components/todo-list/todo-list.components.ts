import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListItem } from './model';
import { TodoDataService } from './todo-data.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  items$: Observable<TodoListItem[]>;
  // items: TodoListItem[];
  // subscription: Subscription;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getTodoList();

    // this.items$.subscribe(td1 => {
    //   console.log('got a new todo list!', td1);
    //   this.items = td1;
    // })
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  markComplete(item: TodoListItem) {
    // item.completed = true;
    //  call the service
    this.service.markCompleted(item);

  }

  add(what: string) {
    // this.items.unshift({ description: what, completed: false });
    // TODO: call the service to add the new todo
    this.service.add(what);
  }

  clearCompleted() {
    // this.items = this.items.filter(item => item.completed === false);
  }
}
