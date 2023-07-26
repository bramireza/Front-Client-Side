import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { resetAuth, resetUser } from "../../redux/slices";
import { envConfig, keysConfig } from "../../configs";
import { generateQueryStringWithParams } from "../../utils";

const { RouteKeys } = keysConfig;
const { FRONT_ACCOUNT_URL } = envConfig;
const Logout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAuth());
    dispatch(resetUser());
    const queryStringWithParams = generateQueryStringWithParams();

    window.location.href = `${FRONT_ACCOUNT_URL}/${RouteKeys.LOGOUT}?${queryStringWithParams}`;
  }, []);

  return <div>Logout</div>;
};
export default Logout;
