import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState({});
  const [appLoading, setAppLoading] = useState<boolean>();


  return (
    <AuthContext.Provider value={{ auth, setAuth , appLoading, setAppLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
