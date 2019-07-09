import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryEntity } from './reducer/library.reducer';
import { State, selectLibraryItems } from './reducer/library.index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  bookstuff$: Observable<LibraryEntity[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.bookstuff$ = this.store.select(selectLibraryItems);
  }

}
