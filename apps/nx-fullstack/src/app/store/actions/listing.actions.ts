import { createAction, props } from '@ngrx/store';

export const userOpened = createAction(
    '[Listing Page] User Opened',
    props<{}>()
)

export const loaded = createAction(
    '[Listing Page] Loaded',
    props<{ entries: any[] }>()
)
