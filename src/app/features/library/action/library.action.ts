import { Action } from '@ngrx/store';
import { LibraryEntity } from '../reducer/library.reducer';


let currentFakeId = 1;
export const REMOVED_ITEM = '[shopping] removed item';
export class BooksRemoved implements Action {
  readonly type = REMOVED_ITEM;
  constructor(public payload: LibraryEntity) { }
}
export const ADD_ITEM = '[shopping] add item';
export class BooksAdded implements Action {
  readonly type = ADD_ITEM;
  payload: LibraryEntity;
  constructor(public title: string, author: string, format: string) {
    this.payload = {
      id: 'TEMP' + (currentFakeId++).toString(),
      title,
      author,
      format
    };
  }
}
export type All =
  BooksAdded
  | BooksRemoved;
