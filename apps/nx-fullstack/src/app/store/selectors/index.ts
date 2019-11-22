import * as fromApp from '../reducers/user.reducer'
import { createSelector } from '@ngrx/store'

export const selectApp = (state: fromApp.State) => state
export const selectUser = (state: fromApp.State) => state.user

export const selectState = createSelector(
    selectApp,
    selectUser,
)