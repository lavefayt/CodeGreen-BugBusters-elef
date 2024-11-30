import React, { createContext, useState } from "react";

const LoadingContext = createContext({});

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appLoading, setAppLoading] = useState<boolean>();

  return (
    <LoadingContext.Provider value={{ appLoading, setAppLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
