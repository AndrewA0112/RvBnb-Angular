import { State } from './store/reducers';
import { AppService } from './services/app.service';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as SelectorList from './store/selectors'


@Component({
  selector: 'nx-fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state: State;

  constructor(private store: Store<State>) {
    this.store.subscribe(state => this.state = state);
    this.store.pipe(select(SelectorList.selectIsAuthenticated))
      .subscribe(isUser => console.log({isUser}));
  }
}
