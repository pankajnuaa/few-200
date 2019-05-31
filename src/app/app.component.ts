import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { ApplicationStarted } from './actions/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End Web 200 with Angular';
  myName = 'Pankaz';

  doIt() {
    this.title = 'FRont-End web 200 with Angular!!??';
  }
  constructor(store: Store<State>) {
    store.dispatch(new ApplicationStarted());
  }
}
