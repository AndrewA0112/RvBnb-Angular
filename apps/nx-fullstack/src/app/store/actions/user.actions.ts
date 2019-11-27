import { createAction, props } from '@ngrx/store';

    // props<{credentials: {password: string, username: string}}>()


export const login = createAction(
    '[Login Page] Login',
    props<{password: string, username: string}>()
)

export const loginComplete = createAction(
    '[Login Page] Login Complete',
    props<{ user: any }>()
)

export const loginFailure = createAction(
    '[Login Page] Login Failure',
    (errorMessage = 'Error logging in') => ({errorMessage})
)

export const loadCachedToken = createAction(
    '[Login Page] Load Cached Token',
    props<{ token: string }>()
)