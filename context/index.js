import React, { useContext, useState } from "react";

const AppContext = React.createContext();
function Provider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("/");

  // Change paths
  const navigateTo = (path) => {
    setCurrentRoute(path);
    setNavOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        navOpen,
        setNavOpen,
        cartOpen,
        setCartOpen,
        currentRoute,
        setCurrentRoute,
        navigateTo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobal() {
  return useContext(AppContext);
}

export default Provider;
