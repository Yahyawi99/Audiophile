import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/dist/client/router";

const AppContext = React.createContext();

function Provider({ children }) {
  const { asPath } = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(asPath);
  const [view, setView] = useState("");
  const [checkout, setCheckout] = useState(false);

  // get current paths
  useEffect(() => {
    setCurrentRoute(asPath);

    if (asPath.includes("checkout")) {
      setCheckout(true);
    } else {
      setCheckout(false);
    }
  }, [asPath]);

  const navigateTo = (path) => {
    setCurrentRoute(path);
    setNavOpen(false);
  };

  // sort array to put the new products first
  const sortArr = (array) => {
    return array.sort((e) => {
      if (e.new) {
        return -1;
      }
      return 1;
    });
  };

  // Check if number is float
  const isFloat = (number) => {
    const devidedNum = number / 2 + "";

    return devidedNum.includes(".");
  };

  // change view port depending on width size
  useEffect(() => {
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);
  const checkWidth = () => {
    const width = window.innerWidth;

    if (width > 600 && width < 1024) {
      setView("tablet");
    }

    if (width <= 600) {
      setView("mobile");
    }

    if (width >= 1024) {
      setView("desktop");
    }
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
        sortArr,
        isFloat,
        view,
        checkout,
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
