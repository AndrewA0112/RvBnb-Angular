import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponentComponent } from './testing-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestingComponentComponent
  ],
  exports: [
    TestingComponentComponent
  ]
})
export class TestingComponentModule {
}
