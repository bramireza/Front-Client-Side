import { useAuth } from "../hooks";
import { envConfig, keysConfig } from "../configs";
import queryString from "query-string";
import { QueryStringParams } from "../types";

interface AuthGuardProps {
  component: () => JSX.Element;
}

const AuthGuard = ({ component: Component }: AuthGuardProps) => {
  const { isAuthenticated } = useAuth();
  const { RouteKeys } = keysConfig;

  if (isAuthenticated === undefined) {
    console.log("loading...");
    return null;
  }
  if (isAuthenticated) {
    console.log("logueado");
    return <Component />;
  } else {
    const currentUrl = window.location.href;
    const urlWithoutPath = new URL(currentUrl).origin;

    const queryObject: QueryStringParams = {
      urlRedirect: currentUrl,
      urlCallback: `${urlWithoutPath}/${RouteKeys.CALLBACK}`,
    };
    const queryStringWithParams = queryString.stringify(queryObject, {
      sort: false,
    });

    window.location.href = `${envConfig.FRONT_ACCOUNT_URL}/${RouteKeys.LOGIN}?${queryStringWithParams}`;
  }
};

export default AuthGuard;
