import { Component } from '@angular/core';

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
}
