import { UserEffects } from './store/effects/user.effects';
import { AppService } from './services/app.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import * as containers from './containers'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import * as fromListing from './store/reducers/listing.reducer'
import * as fromUser from './store/reducers/user.reducer'
import { EffectsModule } from '@ngrx/effects';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      StoreModule.forRoot({
         listing: fromListing.reducer,
         user: fromUser.reducer
      }),
      EffectsModule.forRoot([UserEffects]),
      StoreDevtoolsModule.instrument(),
      BrowserModule,
      HttpClientModule,

      // Containers
      containers.LoginModule,
      containers.RegisterModule,
      containers.HomeModule,

      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
   ],
   providers: [ AppService ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
