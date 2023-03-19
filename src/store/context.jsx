import React, { createContext, useContext } from "react";

const AppContext = createContext();

const useBudgetCtx = () => {
  return useContext(AppContext)
}

const AppProvider = (props) => {
  const value = "";

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export {AppContext, useBudgetCtx, AppProvider};