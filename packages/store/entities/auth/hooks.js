import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { auth, authSuccess, authFail } from "./actions";
import { authSelector } from "./selectors";

export const useAuth = (authService) => {
  const dispatch = useDispatch();
  const dispatchAuth = useCallback(
    async (credentials) => {
      try {
        dispatch(auth());
        const { displayName, email } = await authService(credentials);
        dispatch(authSuccess({ displayName, email }));
      } catch (error) {
        dispatch(authFail({ error }));
      }
    },
    [dispatch]
  );

  const { isLoading, error, data } = useSelector(authSelector);

  return {
    dispatchAuth,
    data,
    error,
    isLoading,
  };
};
