# Micro Front End Architecture
This is a React/Redux/Typescript monorepo ecosystem demo that follows the Micro Front End Architecture by utilising Federeated Modules.

## Repo Stack

- Lerna: for managing the monorepo.
- Federarted modules: for the orchestration of the shared components/micro-front-ends
- Yarn Workspaces: dependency managment

## Micro Front Ends

- `shell` is the App Shell
- `dashboard` - standalone application
- `order` - standalone application
- `sales` - standalone application
- `profile` - standalone application

# Cross communication

`shell` owns the Global appliction state.
Global application state can be accesed/updated in APP `shell` throught `Global Hooks`.
`Global Hooks` return coresponding redux state and a setter function - `dispatchMySeterFunction`

```
export const useGlobalHookStateName = (): hookState => {
  const dispatch = useDispatch();
  const dispatchGlobalHookStateName = useCallback(
    (..) => {
      dispatch(setPageTitle(...));
    },
    [dispatch]
  );
  const { globalHookStateName } = useSelector(stateSelector);

  return {
    dispatchGlobalHookStateName,
    globalHookStateName
  };
};

const [globalHookStateName, dispatchGlobalHookStateName] = useGlobalHookStateName()

```

`Global Hooks` are combined into a Global Store Hook `useStore`.
`useStore` expose Global Application State that is passed down to micro front ends as `props` throught the routes:

```
  const { auth, pageTitle } = useStore();
  ...
  return (
    <Route
        path="dashboard/*"
        element={
        <Dashboard
            store={{ dispatchPageTitle: pageTitle.dispatchPageTitle }}
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
