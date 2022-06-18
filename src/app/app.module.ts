import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHelperLibModule } from 'NgxHelperLib';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxHelperLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
