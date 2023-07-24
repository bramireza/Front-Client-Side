import { keysConfig } from "../configs";
import { Callback, Home, Logout, PageNotFound } from "../pages";

interface IRoute {
  path: string;
  Component: () => JSX.Element;
  isPrivate: boolean;
}
const { RouteKeys } = keysConfig;
export const routes: IRoute[] = [
  {
    path: "/",
    Component: Home,
    isPrivate: false,
  },
  {
    path: `/${RouteKeys.HOME}`,
    Component: Home,
    isPrivate: true,
  },
  {
    path: `/${RouteKeys.CALLBACK}`,
    Component: Callback,
    isPrivate: false,
  },
  {
    path: `/${RouteKeys.LOGOUT}`,
    Component: Logout,
    isPrivate: false,
  },
  {
    path: "*",
    Component: PageNotFound,
    isPrivate: false,
  },
];
