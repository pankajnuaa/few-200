import * as fromLibrary from './library.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const FEATURE_NAME = 'LibraryFeature';
export interface State {
  list: fromLibrary.State;
}
export const reducer = {
  list: fromLibrary.reducer
};

// selectors

// 1. "Feature Selector"

export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);

// 2. A selector for each "branch" of the features state.
export const selectListBranch = createSelector(selectFeature, f => f.list);

// get select all and store in variable name selectAllShoppingItems
export const { selectAll: selectAllLibraryItems } = fromLibrary.adapter.getSelectors(selectListBranch);
// export const selectAlShoppingItems = fromList.adapter.getSelectors(selectListBranch).selectAll; //same as above

// 3 The selector for the actual components
export const selectLibraryItems =
  createSelector(selectAllLibraryItems, items => items as fromLibrary.LibraryEntity[]);
