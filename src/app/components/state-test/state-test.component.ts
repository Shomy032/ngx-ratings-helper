import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

export const increment = createAction('[State Component] Increment');
export const decrement = createAction('[State Component] Decrement');
export const reset = createAction('[State Component] Reset');

export const initialCounerState = 0;

export const counterReducer = createReducer(
  initialCounerState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

@Component({
  selector: 'app-state-test',
  templateUrl: './state-test.component.html',
  styleUrls: ['./state-test.component.scss']
})
export class StateTestComponent implements OnInit {

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit(): void {
    this.count$ = this.store.select('count');
  }

  count$!: Observable<number>
 
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
