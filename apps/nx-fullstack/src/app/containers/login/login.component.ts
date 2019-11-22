import { login } from '../../store/actions/user.actions'
import { UserService } from '../../services/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'nx-fullstack-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  loginFailed: Boolean = false
  
  constructor(private user: UserService, private router: Router, private store: Store<{ user: any}>) {
    // const userStateObj = this.store.select(state => state.user)
    // console.log('User State Obj', userStateObj)
  }

  loginUser() {
    const username = this.loginForm.value.username
    const password = this.loginForm.value.password
    this.store.dispatch(login({password, username}))
  }

}
