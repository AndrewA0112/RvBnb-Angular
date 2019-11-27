import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../store/reducers'
import * as SelectorList from '../store/selectors'

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  selectIsAuthenticated: boolean;

  constructor(private user: UserService, private router: Router, private store: Store<State>) {
    store.pipe(select(SelectorList.selectIsAuthenticated))
      .subscribe(
        selectIsAuthenticated => {
          this.selectIsAuthenticated = selectIsAuthenticated
        }
      )
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const redirectUrl = route.data.redirect;
    if(this.selectIsAuthenticated) {
      return true
    } else {
      this.router.navigate(redirectUrl)
      return false
    }
  }

}
