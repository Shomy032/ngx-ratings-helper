import { createAction, props } from '@ngrx/store';

export const setPageIndex = createAction(
    "[Set App Page Index]", 
props<{ pageIndex: number }>())


export const setPageTitle = createAction(
    "[Set App Page Title]", 
props<{ title: string }>())