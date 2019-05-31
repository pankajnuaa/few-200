import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.action';

@Injectable() // this service injects a service and it can be injectable
export class CounterEffects {

  @Effect() readCountBy$ = this.actions$
    .pipe(
      ofType(applicationActions.APP_START),
      map(() => localStorage.getItem('count-by')),
      filter(ls => ls !== null),
      map(count => +count),
      map(count => new counterActions.CountBySet(count))
    );

  // This is only to log in console
  @Effect({
    dispatch: false
  }) logItAll = this.actions$
    .pipe(
      tap(a => console.log(`Effect got an action of type ${a.type}`))
    );

  // map -> transform
  // tap -> do something
  @Effect({ dispatch: false }) saveCountBy$ = this.actions$
    .pipe(
      ofType(counterActions.SET_COUNT_BY), // Action
      map(a => a as counterActions.CountBySet), // countBySet
      map(a => a.by.toString()), // "3"
      tap(count => localStorage.setItem('count-by', count))
    );
  constructor(private actions$: Actions) { }
}
