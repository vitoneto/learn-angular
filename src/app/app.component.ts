import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: `
  Hello {{ city }}, {{ 1 + 1 }}!`,
  // styleUrl: './app.component.scss'
  styles: `
  :host {
    color: #a144eb;
  }
  `
})
export class AppComponent {
  title = 'learn-angular';
  city = 'San Francisco';
}
