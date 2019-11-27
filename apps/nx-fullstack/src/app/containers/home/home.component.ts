import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as listingActions from '../../store/actions/listing.actions';
import * as reducersRoot from '../../store/reducers';
import * as listingReducer from '../../store/reducers/listing.reducer';
import * as selectorsRoot from '../../store/selectors';
import * as listingSelectors from '../../store/selectors/listing.selectors';

@Component({
  selector: 'nx-fullstack-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  listing$: Observable<listingReducer.State>;
  listingEntries$: Observable<any[]>;
  listingBestEntry$: Observable<any>;

  constructor (private readonly store: Store<reducersRoot.State>) {
    this.listing$ = this.store.pipe(select(selectorsRoot.selectAppListing));
    this.listingEntries$ = this.store.pipe(select(listingSelectors.selectEntries));
    this.listingBestEntry$ = this.store.pipe(select(listingSelectors.selectBestEntry));
  }
  
  public doSomething(): void {
    this.store.dispatch(listingActions.loaded({ entries: [ Math.random() ] }))
  }

}
