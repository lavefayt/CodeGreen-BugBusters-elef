import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState<boolean>();


  return (
    <AuthContext.Provider value={{ auth, setAuth , loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
