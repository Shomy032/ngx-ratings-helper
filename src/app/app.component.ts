import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setPageIndex } from './actions/page-data.action';
import { PageMetaData } from './interfaces/app.state.interface';
import { selectPageIndex } from './selectors/page-data.selector';
// import { pageDataSelector, selectPageIndex } from './selectors/page-data.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navPageIndex$! : Observable<number>;

  constructor(
    private store: Store<{ pageMetaData: PageMetaData }>
  ){
  }

  ngOnInit(){
    this.initPageData();
  }

  initPageData(){
    this.navPageIndex$ = this.store.select(selectPageIndex)
  }

  navigate(pageIndex: number){
    this.store.dispatch(setPageIndex({pageIndex}))
  }


}
