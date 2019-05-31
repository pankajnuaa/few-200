import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] increment';
export class CountIncremented implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export const DECREMENT = '[Counter] decrement';
export class CountDecremented implements Action {
  readonly type = DECREMENT;
  constructor() { }
}

export const RESET = '[Counter] reset';
export class CountReset implements Action {
  readonly type = RESET;
  constructor() { }
}

export const SET_COUNT_BY = '[counter] set count by';
export class CountBySet implements Action {
  readonly type = SET_COUNT_BY;
  constructor(public by: number) { }
}

// Discriminated uniton type (for more info, see typescriptlang.org)

export type All =
  CountIncremented
  | CountDecremented
  | CountReset
  | CountBySet;

