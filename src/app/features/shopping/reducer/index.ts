

export const FEATURE_NAME = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingListItem } from '../models';

export interface State {
  list: fromList.State;
}
export const reducer = {
  list: fromList.reducer
};

// selectors

// 1. "Feature Selector"

export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);

// 2. A selector for each "branch" of the features state.
export const selectListBranch = createSelector(selectFeature, f => f.list);

// get select all and store in variable name selectAllShoppingItems
export const { selectAll: selectAllShoppingItems } = fromList.adapter.getSelectors(selectListBranch);
// export const selectAlShoppingItems = fromList.adapter.getSelectors(selectListBranch).selectAll; //same as above

// 3 The selector for the actual components
export const selectShoppingItems =
  createSelector(selectAllShoppingItems, items => items as ShoppingListItem[]);
