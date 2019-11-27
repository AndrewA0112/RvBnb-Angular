import * as LoginActions from '../actions/user.actions';
import { Action, createReducer, on } from '@ngrx/store';
import decode from 'jwt-decode'

export interface State {
    id: number;
    username: string;
    token: string;
    is_land_owner: boolean;
    exp: number;
    iat: number;
    loading: boolean;
    errorMessage: string;
}

export const initialState: State = {
    id: null,
    username: null,
    token: null,
    is_land_owner: null,
    exp: null,
    iat: null,
    loading: null,
    errorMessage: null
}

const userReducer = createReducer(
    initialState,
    on(LoginActions.login, state => ({ ...state, loading: true})),
    on(LoginActions.loginComplete, (state, { user }) => ({
        ...user,
        loading: false,
        errorMessage: null,
    })),
    on(LoginActions.loginFailure, (state, { errorMessage }) => ({
        ...state,
        loading: false,
        errorMessage: errorMessage
    })),
    on(LoginActions.loadCachedToken, (state, { token }) => ({
        ...decode(token),
        token,
        loading: false,
        errorMessage: null
    }))
)

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action)
}