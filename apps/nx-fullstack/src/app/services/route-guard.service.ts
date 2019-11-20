import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const redirectUrl = route.data.redirect

    if(this.user.isLogged()) {
      return true
    } else {
      this.router.navigate(redirectUrl)
      return false
    }
  }

}
