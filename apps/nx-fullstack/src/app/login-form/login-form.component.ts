import { login } from './../store/actions/user.actions';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'nx-fullstack-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  loginFailed: Boolean = false
  
  constructor(private user: UserService, private router: Router, private store: Store<{ user: any}>) {
    if(user.isLogged()) {
      this.router.navigate(['/'])
    }

    const userStateObj = this.store.select(state => state.user)
    console.log('User State Obj', userStateObj)
  }

  loginUser() {
    const username = this.loginForm.value.username
    const password = this.loginForm.value.password
    this.store.dispatch(login({password, username}))
    console.log('dispatched')
  }

}
