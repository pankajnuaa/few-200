import { TodoListItem } from './model';
import { observable, BehaviorSubject, Observable } from 'rxjs';

export class TodoDataService {
  private data: TodoListItem[] = [
    { description: 'fix front door', completed: false },
    { description: 'Change lightbulb', completed: true },
    { description: 'Pay for the trip', completed: true }
  ];
  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);

  getTodoList(): Observable<TodoListItem[]> {
    const observable = this.todoListSubject.asObservable();
    return observable;
  }

  add(what: string) {
    this.data = [{ description: what, completed: false }, ...this.data];
    this.todoListSubject.next(this.data);
  }
}
