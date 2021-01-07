export type PageTitleReducerType = {
  pageTitle: string;
};

export enum ACTIONS {
  SET_PAGE_TITLE = "SET_PAGE_TITLE",
}

export type ActionsType = {
  type: string;
  payload: PageTitleReducerType;
};
