// set up auth context and auth provider
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { dispatch } from "../store";
import { userLogin } from "../store/reducer/auth";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getLocalStorageToken = localStorage.getItem("token");
  const getLocalStorageUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (getLocalStorageToken && getLocalStorageUser) {
      setIsLoggedIn(true);
      setUser(getLocalStorageUser);
      setToken(getLocalStorageToken);
      dispatch(
        userLogin({ user: getLocalStorageUser, token: getLocalStorageToken })
      );
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const modeToggle = () => {
    setMode((prev) => !prev);
  };

  return (
    <AuthContext.Provider
      value={{ mode, token, user, isLoggedIn, logout, modeToggle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider };
