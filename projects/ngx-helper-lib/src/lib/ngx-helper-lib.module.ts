import { NgModule } from '@angular/core';
import { NgxHelperLibComponent } from './ngx-helper-lib.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';
import { TestCompSecComponent } from './components/test-comp-sec/test-comp-sec.component';


@NgModule({
  declarations: [
    NgxHelperLibComponent,
    TestCompComponent,
    TestCompSecComponent
  ],
  imports: [
  ],
  exports: [
    NgxHelperLibComponent,
    TestCompComponent,
    TestCompSecComponent
  ]
})
export class NgxHelperLibModule { }
