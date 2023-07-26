import { useAuth } from "../hooks";
import { envConfig, keysConfig } from "../configs";
import { generateQueryStringWithParams } from "../utils";

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
    const queryStringWithParams = generateQueryStringWithParams();

    window.location.href = `${envConfig.FRONT_ACCOUNT_URL}/${RouteKeys.LOGIN}?${queryStringWithParams}`;
  }
};

export default AuthGuard;
