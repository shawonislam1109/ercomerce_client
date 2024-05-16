import { useContext, useEffect } from "react";
import { dispatch } from "../store";
import { userLogin } from "../store/reducer/auth";
import { AuthContext } from "./useContext";

const useAuth = () => {
  // const { mode, isLoggedIn, user, token } = useSelector((state) => state.auth);

  const { mode, isLoggedIn, user, token } = useContext(AuthContext);

  console.log(user);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userLogin({ token, user }));
    }
  }, [token, user]);

  return { user, mode, isLoggedIn };
};

export default useAuth;
