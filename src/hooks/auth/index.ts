import { useEffect, useState } from "react";
import { useAppDispatch } from "..";
import { authServices } from "../../services";
import { setUser } from "../../redux/slices";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const dispatch = useAppDispatch();

  const authenticateUser = async () => {
    try {
      const { success, user } = await authServices.verifyLogin();
      if (success) {
        setIsAuthenticated(true);
        dispatch(setUser(user));
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, [dispatch]);

  return { isAuthenticated };
};
