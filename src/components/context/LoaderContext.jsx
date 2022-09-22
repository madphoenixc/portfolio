import React, { useContext, useEffect, useState } from "react";
import LoaderComp from "../Loader/Loading";

export const LoaderContext = React.createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{loading, setLoading}}>
      {loading && <LoaderComp />}
      {children}
    </LoaderContext.Provider>
  );
};
