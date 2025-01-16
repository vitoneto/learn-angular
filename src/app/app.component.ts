import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for(user of users; track user.id) {
      {{ user.name }}
    }
  `,
})
export class AppComponent {
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
}
