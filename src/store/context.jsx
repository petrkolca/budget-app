import { createContext } from "react";

const AppContext = createContext();

const AppProvider = (props) => {
  const value = "";

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export {AppContext, AppProvider};