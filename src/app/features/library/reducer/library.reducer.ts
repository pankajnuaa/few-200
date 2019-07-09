import * as libraryAction from '../action/library.action';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface LibraryEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}


export interface State extends EntityState<LibraryEntity> {

}

export const adapter = createEntityAdapter<LibraryEntity>();
const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: ' The World of Ice & Fire',
      author: 'George R. R. Martin',
      format: 'Hardcover'
    },
    2: {
      id: '2',
      title: 'Lord of the rings',
      author: 'J.R.R. Tolkien',
      format: 'Paperback'
    }
  }
};


export function reducer(state: State = initialState, action: libraryAction.All): State {
  switch (action.type) {
    case libraryAction.REMOVED_ITEM: {
      return adapter.removeOne(action.payload.id, state);
    }
    case libraryAction.ADD_ITEM: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
