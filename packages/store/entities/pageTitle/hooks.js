import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "./actions";
import { pageTitleSelector } from "./selectors";
import { useCallback } from "react";

export const usePagetitle = () => {
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
