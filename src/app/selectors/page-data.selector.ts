import { AppState } from "../interfaces/app.state.interface"

export const selectTitle = (state: AppState) => state?.pageMetaData?.title;
export const selectPageIndex = (state: AppState) =>  state?.pageMetaData?.pageIndex;
