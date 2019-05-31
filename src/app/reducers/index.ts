import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';
export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// selector function

export const selectCurrentCount = (state: State) => state.counter.current;
// export const SelectAtTheStart = (state: State) => state.counter.current === 0;
export const selectCountingBy = (state: State) => state.counter.by;
export const selectCantDecrement = createSelector(selectCurrentCount, selectCountingBy, (c, b) => c - b < 0);
export const SelectAtTheStart = createSelector(selectCountingBy, c => c === 0);

