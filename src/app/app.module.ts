import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RatingsHelperModule } from 'ratings-helper';
import { AppComponent } from './app.component';
import { RatingTestsComponent } from './components/rating-tests/rating-tests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { counterReducer, StateTestComponent } from './components/state-test/state-test.component';
import { pageMetaDataReducer } from './reducers/page-data.reducer';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';

// console.log all actions ( debugg mode ) 
function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    // todo add enable/disable to ui ( debugg mode ) 
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}

const metaReducers: MetaReducer<any>[] = [debug];

const MATERIAL_MODULES = [
  MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    RatingTestsComponent,
    StateTestComponent
  ],
  imports: [
    BrowserModule,
    RatingsHelperModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    StoreModule.forRoot({ count: counterReducer, pageMetaData: pageMetaDataReducer }, { metaReducers })   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
