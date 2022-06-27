import { createReducer, on } from '@ngrx/store';
import { setPageIndex, setPageTitle } from "../actions/page-data.action"
import { PageMetaData } from '../interfaces/app.state.interface';

const storageName: string = "page-data";

const getInitialState = () : PageMetaData => {
  const pageIndex = 1;
  const title = "Title"; // add title to UI
  const initialDefaultState : PageMetaData = { pageIndex , title };
  try{
    const cachedData = JSON.parse(localStorage.getItem(storageName) as string)
    return cachedData || initialDefaultState;
  } catch (error) {
    return  initialDefaultState;
  }
}

const updateDataCache = (state : PageMetaData) : void => {
  localStorage.setItem(storageName, JSON.stringify(state))
} 

export const pageMetaDataReducer = createReducer(
  getInitialState(),
  on(setPageIndex, (state, { pageIndex }) => {
    const newState = {
      ...state, pageIndex
   }
    updateDataCache(newState)
    return newState;
  }),
  on(setPageTitle, (state, { title }) => {
    const newState = {
      ...state, title
   }
    updateDataCache(newState)
    return  newState;
  },
));



