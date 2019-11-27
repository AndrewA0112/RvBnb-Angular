import * as userReducer from './user.reducer';
import * as listingReducer from './listing.reducer';

export interface State {
  user: userReducer.State;
  listing: listingReducer.State;
  errorMessage: string;
  loading: boolean;
}
