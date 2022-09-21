import React, { useContext, useState } from "react";
import LoaderComp from "../Loader/Loading";

export const LoaderContext = React.createContext();

export const useSetLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  console.log(children ,"child");
  return (
    <LoaderContext.Provider value={setLoading}>
      {loading && <LoaderComp />}
      {children}
    </LoaderContext.Provider>
  );
};