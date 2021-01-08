import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  authSuccess,
  authFail,
} from "../../../store/entities/auth/actions";
import { authSelector } from "../../../store/entities/auth/selectors";
import { UseAuthType } from "./types";
import { authService } from "../../../services";
import { useCallback } from "react";

export const useAuth = (): UseAuthType => {
  const dispatch = useDispatch();
  const dispatchAuth = useCallback(
    async (credentials) => {
      try {
        dispatch(auth());
        const { displayName, description, link, img } = await authService(
          credentials
        );
        dispatch(
          authSuccess({ data: { displayName, description, link, img } })
        );
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
