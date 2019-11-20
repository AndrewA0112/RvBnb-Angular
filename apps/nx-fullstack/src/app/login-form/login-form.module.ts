import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    EffectsModule.forFeature([UserEffects]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class LoginFormModule {
}