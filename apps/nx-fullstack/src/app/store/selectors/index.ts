import * as reducersRoot from '../reducers'
import { createSelector } from '@ngrx/store'

export const selectApp = (state: reducersRoot.State) => state
export const selectAppListing = (state: reducersRoot.State) => state.listing
export const selectAppUser = (state: reducersRoot.State) => state.user

export const selectIsAuthenticated = createSelector(
    selectAppUser,
    (user) => user.token !== null
)