import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
  <p>The user's name is {{ name }}</p>
  `
})
export class UserComponent {
  @Input() name = '';
}
