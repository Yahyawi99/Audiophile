import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        navOpen,
        setNavOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;
