import { Component, OnInit, Input } from '@angular/core';
import { LibraryEntity } from '../reducer/library.reducer';
import { Store } from '@ngrx/store';
import { State } from '../reducer/library.reducer';
import { BooksRemoved } from '../action/library.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() library: LibraryEntity[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  remove(item) {
    this.store.dispatch(new BooksRemoved(item));
  }

}
