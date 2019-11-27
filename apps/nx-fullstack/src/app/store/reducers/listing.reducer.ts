import * as ListingActions from '../actions/listing.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
    entries: any[];
    loading: boolean;
    errorMessage: string;
}

export const initialState: State = {
    entries: [],
    loading: null,
    errorMessage: null
}

const listingReducer = createReducer(
    initialState,
    on(ListingActions.userOpened, state => ({
        ...state,
        errorMessage: null,
        loading: true
    })),
    on(ListingActions.loaded, (state, action) => ({
        ...state,
        errorMessage: null,
        loading: null,
        entries: action.entries
    })),
)

export function reducer(state: State | undefined, action: Action) {
    return listingReducer(state, action)
}