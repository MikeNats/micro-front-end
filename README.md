# Micro Front End Architecture
This is a React/Redux/Typescript monorepo ecosystem demo that follows the Micro Front End Architecture by utilising Federeated Modules.

## Repo Stack

- Lerna: for managing the monorepo.
- Federarted modules: for the orchestration of the shared components/micro-front-ends
- Yarn Workspaces: dependency management

## Micro Front Ends

- `shell` is the App Shell
- `dashboard` - standalone application
- `order` - standalone application
- `sales` - standalone application
- `profile` - standalone application

# Cross communication

`shell` owns the Global appliction state.
Global application state can be accessed/updated in APP `shell` through `Global Hooks`.
`Global Hooks` return corresponding redux state and a setter function - `dispatchMySetterFunction`

```
export const useHookStateName = (): hookState => {
  const dispatch = useDispatch();
  const dispatcHookStateName = useCallback(
    (...) => {
      dispatch(actionsName(...));
    },
    [dispatch]
  );
  const { reduxState } = useSelector(reduxSelector);

  return {
    dispatchlHookStateName,
    reduxState
  };
};

const [reduxState, dispatchlHookStateName] = useHookStateName()

```

`Global Hooks` are combined into a Global Store Hook `useStore`.
```
import { useAuth } from "./authHook";
import { usePagetitle } from "./pageTitleHook";

export const useStore = () => {
  const { dispatchAuth, data, error, isLoading } = useAuth();
  const { dispatchPageTitle, pageTitle } = usePagetitle();

  return {
    auth: { dispatchAuth, data, error, isLoading },
    pageTitle: { dispatchPageTitle, pageTitle },
  };
};
```
`useStore` expose Global Application State that is passed down to micro front ends.

You can pass it having a contract between all MFEs `prop` through the routes:

```
  const { auth, pageTitle } = useStore();
  ...
  return (
    <Route
      path="profile/*"
      element={
        <Profile
          setTitle={pageTitle.dispatchPageTitle}
          link={auth.data.link}
          description={auth.data.description}
          fullName={auth.data.displayName}
          imgUrl={auth.data.img}
        />
      }
    />
   ...
```

# Running App

Run `yarn install`.
Run `yarn start`.
This will build all the apps `shell`, `dashboard`, `order`, `profile`, `sales` on different ports as shown below

- [localhost:3000](http://localhost:3000/) (HOST) - `shell`
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE) - `dashboard`
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE) - `order`
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE) - `sales`
- [localhost:3004](http://localhost:3004/) (STANDALONE REMOTE) - `profile`
