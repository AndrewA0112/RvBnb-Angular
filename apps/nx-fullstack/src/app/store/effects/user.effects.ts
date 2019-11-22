import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import * as LoginActions from './../actions/user.actions';
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, ROOT_EFFECTS_INIT } from '@ngrx/effects'
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import decode from 'jwt-decode'

@Injectable()
export class UserEffects {
    constructor( private actions: Actions, private authService: AuthService, private router: Router, private user: UserService) {}

    initUser = createEffect(() => 
        this.actions.pipe(
        ofType(ROOT_EFFECTS_INIT),
        switchMap(() => {
            const token = localStorage.getItem('TOKEN');
            if (token) {
                const decodedToken = decode(token)
                return of(LoginActions.loadCachedToken({decodedToken}))
            } else {
                return EMPTY
            }
        })
    ))

    login = createEffect(() => 
        this.actions.pipe(
        ofType(LoginActions.login),
        exhaustMap(action =>
            this.authService.loginUser(action.username, action.password).pipe(
                map(user => LoginActions.loginComplete({user})),
                catchError(() => of(LoginActions.loginFailure()))
                )
            )
        )
    )

    loginSuccess = createEffect(() =>
        this.actions.pipe(
        ofType(LoginActions.loginComplete),
        tap(response => {
            this.user.setToken(response.user.token)
            this.router.navigate(['/'])
            })
        ),
        { dispatch: false }
    )

    loadCachedToken = createEffect(() =>
            this.actions.pipe(
                ofType(LoginActions.loadCachedToken),
                tap(response => {
                    this.router.navigate(['/'])
                })
            ),
            { dispatch: false }
    )
}