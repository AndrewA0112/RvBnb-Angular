import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-fullstack-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    isLandOwner: new FormControl(''),
  })

  registerFailed: Boolean = false

  constructor(private auth: AuthService, private user: UserService, private router: Router) {}

  registerUser() {
    const username = this.registerForm.value.username
    const password = this.registerForm.value.password
    const isLandOwner = this.registerForm.value.isLandOwner
    this.auth.registerUser(username, password, isLandOwner)
      .subscribe(
        res => {
          this.router.navigate(['/login'])
        },
        res => {
          this.registerFailed = true
        })
  }
}
