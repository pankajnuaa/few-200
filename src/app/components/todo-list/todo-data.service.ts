import { TodoListItem, TodoSummary } from './model';
import { observable, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  markCompleted(item: TodoListItem) {
    for (const value of this.data) {
      if (value.description === item.description) {
        value.completed = true;
      }
    }
    this.todoListSubject.next(this.data);
  }

  add(what: string) {
    this.data = [{ description: what, completed: false }, ...this.data]; // adding new item in the list
    this.todoListSubject.next(this.data);
  }
  getSummary(): Observable<TodoSummary> {
    return this.todoListSubject.pipe(
      map(list => {
        return {
          total: list.length,
          completed: list.filter(f => f.completed).length,
          incomplete: list.filter(f => !f.completed).length
        } as TodoSummary;
      })
    );
  }
}
