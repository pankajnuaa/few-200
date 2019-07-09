
import { BookList } from '../models/booklist.model';
import { Action } from '@ngrx/store';

export const ADD_BOOK = '[BOOKLIST] Add';
export const REMOVE_BOOK = '[BOOKLIST] Remove';

export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: BookList) { }
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;

  constructor(public payload: number) { }
}

export type Actions = AddBook | RemoveBook;
