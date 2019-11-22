import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../store/reducers/user.reducer'
import * as SelectorList from '../store/selectors'
import { User } from '../store/reducers/user.reducer'

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  userState: User | any

  constructor(private user: UserService, private router: Router, private store: Store<State>) {
    store.pipe(select(SelectorList.selectUser))
      .subscribe(
        res => {
          this.userState = res
        }
      )
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const redirectUrl = route.data.redirect

    if(this.userState.isAuthenticated) {
      return true
    } else {
      this.router.navigate(redirectUrl)
      return false
    }
  }

}
