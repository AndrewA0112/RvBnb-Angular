import * as LoginActions from './../actions/user.actions';
import { Action, createReducer, on } from '@ngrx/store'

export interface User {
    id: string;
    username: string;
    token: string;
    is_land_owner: boolean;
}

export interface State {
    isAuthenticated: boolean,
    user: User | null,
    errorMessage: string | null,
    loading: boolean
}

export const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    loading: false
}

const userReducer = createReducer(
    initialState,
    on(LoginActions.login, state => ({ ...state, loading: true})),
    on(LoginActions.loginComplete, (state, { user }) => ({
        ...state,
        isAuthenticated: true,
        user: user,
        loading: false
    })),
    on(LoginActions.loginFailure, (state, { errorMessage }) => ({
        ...state,
        isAuthenticated: false,
        loading: false,
        errorMessage: errorMessage
    })),
    on(LoginActions.loadCachedToken, (state, { decodedToken }) => ({
        ...state,
        isAuthenticated: true,
        user: decodedToken
    }))
)

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action)
}