import { useAuth } from "./auth";
import { usePagetitle } from "./pageTitle";

export const useStore = () => {
  const { dispatchAuth, data, error, isLoading } = useAuth();
  const { dispatchPageTitle, pageTitle } = usePagetitle();

  return {
    auth: { dispatchAuth, data, error, isLoading },
    pageTitle: { dispatchPageTitle, pageTitle },
  };
};
