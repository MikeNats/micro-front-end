import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../store/entities/pageTitle/actions";
import { pageTitleSelector } from "../store/entities/pageTitle/selectors";
import { usePagetitleType } from "./types";

import { useCallback } from "react";
export const usePagetitle = (): usePagetitleType => {
  const dispatch = useDispatch();
  const dispatchPageTitle = useCallback(
    (title) => {
      dispatch(setPageTitle({ pageTitle: title }));
    },
    [dispatch]
  );
  const { pageTitle } = useSelector(pageTitleSelector);

  return {
    dispatchPageTitle,
    pageTitle,
  };
};
