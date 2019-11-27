import * as selectorsRoot from '.';
import { createSelector } from '@ngrx/store'

export const selectEntries = createSelector(
    selectorsRoot.selectAppListing,
    (listing) => listing.entries
)

export const selectBestEntry = createSelector(
    selectorsRoot.selectIsAuthenticated,
    selectEntries,
    (isAuth, entries) => {
        if (!isAuth) {
            return null;
        }
        if (entries.length < 1) {
            return null
        }
        if (entries[0] >= 0.5) {
            return 'is >= 0.5'
        }
        return 'is < 0.5';
    }
)
