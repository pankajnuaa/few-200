import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookList } from '../../models/booklist.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {
  booklist: Observable<BookList[]>;

  constructor(private store: Store<AppState>) {
    this.booklist = this.store.select('booklist');
  }

  ngOnInit() {
  }

}
