import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingComponentModule } from '../../components/testing-component/testing-component.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TestingComponentModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
