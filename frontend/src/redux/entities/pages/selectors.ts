import { RootState } from "redux/types";
import { PageType } from "./types";


export const getPage = (state: RootState, pageId: string): PageType | null | undefined => {
    return state.entities.pages.byId ? state.entities.pages.byId[pageId] : undefined;
}