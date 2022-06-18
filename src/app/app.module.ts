import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxHelperLibModule } from 'NgxHelperLib';
import { RatingsHelperModule } from 'ratings-helper';
import { AppComponent } from './app.component';
import { RatingTestsComponent } from './rating-tests/rating-tests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL_MODULES = [
  MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    RatingTestsComponent
  ],
  imports: [
    BrowserModule,
    // NgxHelperLibModule,
    RatingsHelperModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
