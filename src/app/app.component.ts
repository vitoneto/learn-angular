import {Component} from '@angular/core';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  template: `
    <app-user name="Simran"></app-user>
  `,
  imports: [UserComponent],
})
export class AppComponent {
  message = '';

  onMouseOver() {
    this.message = 'way to go  🚀';
    console.log(this.message);
  }
}
