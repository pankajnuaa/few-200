import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingListItem } from '../../models';
import { ItemRemoved } from '../../actions/list.action';
import { State } from '../../reducer';
import { Store } from '@ngrx/store';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() list: ShoppingListItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  remove(item: ShoppingListItem) {
    this.store.dispatch(new ItemRemoved(item));
  }

}
