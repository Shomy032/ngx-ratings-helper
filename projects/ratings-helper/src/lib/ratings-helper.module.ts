import { NgModule } from '@angular/core';
import { RatingsHelperComponent } from './ratings-helper.component';
import { InputComponent } from './components/input/input.component';
import { StarComponent } from './components/star/star.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    RatingsHelperComponent,
    InputComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    RatingsHelperComponent,
    InputComponent,
    StarComponent
  ]
})
export class RatingsHelperModule { }
