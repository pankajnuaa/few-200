import { BookList } from './models/booklist.model';

export interface AppState {
  readonly booklist: BookList[];
}
