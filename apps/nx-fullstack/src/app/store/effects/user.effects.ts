import { AuthService } from './../../services/auth.service';
import { login, loginComplete, loginFailure } from './../actions/user.actions';
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects'
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor( private actions: Actions, private authService: AuthService) {
        console.log('From user Effect')
    }

    loginUser = createEffect(() => 
        this.actions.pipe(
        ofType(login),
        exhaustMap(action =>
            this.authService.loginUser(action.username, action.password).pipe(
                map(user => loginComplete({user})),
                catchError(() => of(loginFailure()))
                ) 
            )
        )
    )
}
