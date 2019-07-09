import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducer/library.reducer';
import { BooksAdded } from '../action/library.action';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLInputElement) {
    this.store.dispatch(new BooksAdded(title.value, author.value, format.value));
    this.clear(title);
    this.clear(author);
  }

  clear(what: HTMLInputElement) {
    what.value = '';
  }

}
