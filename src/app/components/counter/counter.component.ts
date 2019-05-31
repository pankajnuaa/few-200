import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectCurrentCount, selectCantDecrement, selectCountingBy, SelectAtTheStart } from '../../reducers';
import { Observable } from 'rxjs';
import * as counterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  cantDecrement$: Observable<boolean>;
  selectAtStart$: Observable<boolean>;
  count$: Observable<number>;
  by$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount); // gives me the observable- select from the store
    this.cantDecrement$ = this.store.select(selectCantDecrement);
    this.by$ = this.store.select(selectCountingBy);
    this.selectAtStart$ = this.store.select(SelectAtTheStart);
  }
  increment() {
    // this.count = this.count + 1;
    // this.store.dispatch({ type: 'increment' });  // subscribe to the change??
    this.store.dispatch(new counterActions.CountIncremented());

  }

  decrement() {
    // this.count = this.count - 1;
    // this.store.dispatch({ type: 'decrement' });
    this.store.dispatch(new counterActions.CountDecremented());
  }
  reset() {
    // this.store.dispatch({ type: 'reset' });
    this.store.dispatch(new counterActions.CountReset());
  }

  setCountBy(what: number) {
    this.store.dispatch(new counterActions.CountBySet(what));
  }


}
