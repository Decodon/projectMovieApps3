import React, { useState, useEffect, createContext } from "react";
import fakeAuth from "./fakeAuth";
import { useLocation, useNavigate } from "react-router-dom";

//EXPORT the context
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);    //store token. Start with null
  const location = useLocation();             //Every time url changes, hook, contains details on current location state
  const navigate = useNavigate();             //Navigation Hook, change rul programmaticlaly

  const authenticate = async (username, password) => {
    const token = await fakeAuth(username, password);   //pass to back end API to see if work
    setToken(token);                              //Set that it's always ok
    const origin = location.state?.intent?.pathname || "/";       //browse to original page they were trying to get to or home page - /
    navigate(origin);
  };
  
  const signout = () => {             //signout function -sets to null
    setToken(null);
    navigate('/')
  };

  return (
    <AuthContext.Provider
      value={{
        token,                //return these to all my app
        authenticate,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
