import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const AppContext = React.createContext();

function Provider({ children }) {
  const { asPath } = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(asPath);
  const [view, setView] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [payMethode, setPayMethode] = useState("cash");
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState("");
  const [cartPrice, setCartPrice] = useState("");

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

  // format price
  const formatNumber = (num) => {
    num += "";
    let formatedNum = num.split("").reverse();

    for (let i = 3; i < num.length; i = i + 4) {
      formatedNum.splice(i, 0, ",");
    }

    return formatedNum.reverse().join("");
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

  // cart
  useEffect(() => {
    if (!localStorage.getItem("Cart")) {
      localStorage.setItem("Cart", JSON.stringify([]));
    }

    const storage = JSON.parse(localStorage.getItem("Cart"));

    setCart(storage);
  }, []);

  useEffect(() => {
    let length = 0;
    let price = 0;

    cart.forEach((e) => {
      length += e.quantity;
      price += e.price * e.quantity;
    });

    setCartLength(length);
    setCartPrice(price);
  }, [cart]);

  const addToCart = (item) => {
    const { id, slug, shortName, price } = item;

    const storage = JSON.parse(localStorage.getItem("Cart"));

    const checkForSameItem = storage.some((e) => e.id === id);
    const product = checkForSameItem ? storage.find((e) => e.id === id) : [];

    if (checkForSameItem) {
      if (product.quantity < 3) {
        storage.map((e) => {
          if (e.id === id) {
            e.quantity = e.quantity + 1;
          }
          return e;
        });

        localStorage.setItem("Cart", JSON.stringify(storage));
      }
    }

    if (!checkForSameItem) {
      const data = {
        id,
        image: `/assets/cart/image-${slug}.jpg`,
        name: shortName,
        price,
        quantity: 1,
      };

      storage.push(data);

      localStorage.setItem("Cart", JSON.stringify(storage));
    }

    setCart(storage);
  };

  const removeFromCart = (item) => {
    let storage = JSON.parse(localStorage.getItem("Cart"));

    const product = storage.find((e) => e.id === item.id);

    if (product.quantity === 1) {
      storage = storage.filter((e) => e.id !== product.id);
    } else {
      storage = storage.map((e) => {
        if (e.id === product.id) {
          product.quantity -= 1;
          return e;
        }
        return e;
      });
    }

    localStorage.setItem("Cart", JSON.stringify(storage));

    setCart(storage);
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
        payMethode,
        setPayMethode,
        addToCart,
        cart,
        cartLength,
        removeFromCart,
        cartPrice,
        formatNumber,
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
