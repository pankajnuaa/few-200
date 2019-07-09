import { BookList } from '../models/booklist.model';
import * as BookListAction from './../actions/booklist.action';

export const FEATURE_NAME_BOOKS = 'booklist';
const initialState: BookList = {
  title: 'A Game of Thrones (A Song of Ice and Fire)',
  author: 'George R. R. Martin'
};

export function reducer(state: BookList[] = [initialState], action: BookListAction.Actions) {
  switch (action.type) {
    case BookListAction.ADD_BOOK:
      return [...state, action.payload];


    default:
      return state;
  }
}
