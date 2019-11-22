import { State } from './store/reducers/user.reducer';
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
  state: State | any

  constructor(private store: Store<State>) {
    store.pipe(select(SelectorList.selectState))
      .subscribe(
        res => {
          this.state = res
        }
      )
  }
}
