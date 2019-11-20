import { UserEffects } from './store/effects/user.effects';
import { RegisterFormModule } from './register-form/register-form.module';
import { AppService } from './services/app.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormModule } from './login-form/login-form.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import * as fromUser from './store/reducers/user.reducer'
import { EffectsModule } from '@ngrx/effects';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      StoreModule.forRoot({ user: fromUser.reducer }),
      EffectsModule.forRoot([UserEffects]),
      StoreDevtoolsModule.instrument({
         maxAge: 25, // Retains last 25 states
      }),
      BrowserModule,
      HttpClientModule,
      LoginFormModule,
      RegisterFormModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [ AppService ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
