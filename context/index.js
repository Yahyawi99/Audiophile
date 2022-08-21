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
  const [payMethode, setPayMethode] = useState("cash");
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState("");
  const [cartPrice, setCartPrice] = useState("");
  const [purshaseCompleted, setPurshaseCompleted] = useState(false);
  const [error, setError] = useState(false);

  const [billingData, setBillingData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const BillingFormRef = useRef(null);

  const [shippingData, setShippingData] = useState({
    address: "",
    zip_code: "",
    city: "",
    country: "",
  });
  const ShippingFormRef = useRef(null);

  const [paymentData, setPaymentData] = useState({
    e_money_number: "",
    e_money_pin: "",
  });
  const PaymentFormRef = useRef(null);

  // *****************************************
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

  // email validator
  const emailValidate = (email) => {
    const regex = /^[a-z]{3,}\d*@[a-z]*[.][a-z]*$/gi;
    return regex.test(email);
  };

  // **************************************
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

  // *******************************
  const formSubmit = () => {
    if (payMethode === "cash") {
      billingForm();
      shippingForm();

      if (billingForm() && shippingForm()) {
        formSubmited();
      }
    } else {
      billingForm();
      shippingForm();
      paymentForm();

      if (billingForm() && shippingForm() && paymentForm()) {
        formSubmited();
      }
    }

    window.scrollTo({
      top: 0,
    });
  };

  // billing form
  const billingForm = () => {
    const form = BillingFormRef.current;
    const Inputs = form.getElementsByTagName("input");

    let success = true;

    [...Inputs].forEach((input) => {
      const label = input.previousElementSibling;
      const emptyMessage = input.nextElementSibling;
      const formatMessage = input.nextElementSibling.nextElementSibling;

      try {
        if (input.value === "") {
          emptyInputError(label, input, emptyMessage, formatMessage, success);
        }

        if (
          input.name === "email" &&
          !emailValidate(input.value) &&
          input.value !== ""
        ) {
          formatInputError(label, input, formatMessage, success);
        }

        if (input.name === "number" && input.value.length < 10) {
          formatInputError(label, input, formatMessage, success);
        }
      } catch (err) {
        clearError(label, input, emptyMessage, formatMessage);

        success = false;
      }
    });

    return success;
  };

  // shipping form
  const shippingForm = () => {
    const form = ShippingFormRef.current;
    const Inputs = form.getElementsByTagName("input");

    let success = true;

    [...Inputs].forEach((input) => {
      const label = input.previousElementSibling;
      const emptyMessage = input.nextElementSibling;
      const formatMessage = input.nextElementSibling.nextElementSibling;

      try {
        if (input.value === "") {
          emptyInputError(label, input, emptyMessage, formatMessage, success);
        }

        if (input.value.length < 5) {
          formatInputError(label, input, formatMessage, success);
        }
      } catch (err) {
        clearError(label, input, emptyMessage, formatMessage);
        success = false;
      }
    });

    return success;
  };

  // payment form
  const paymentForm = () => {
    const form = PaymentFormRef.current;
    const Inputs = form.getElementsByTagName("input");

    let success = true;

    [...Inputs].forEach((input) => {
      const label = input.previousElementSibling;
      const emptyMessage = input.nextElementSibling;
      const formatMessage = input.nextElementSibling.nextElementSibling;

      try {
        if (input.value === "") {
          emptyInputError(label, input, emptyMessage, formatMessage, success);
        }

        if (input.name === "e-money number" && input.value.length < 16) {
          formatInputError(label, input, formatMessage, success);
        }

        if (input.name === "pin" && input.value.length < 4) {
          formatInputError(label, input, formatMessage, success);
        }
      } catch (err) {
        clearError(label, input, emptyMessage, formatMessage);

        success = false;
      }
    });

    return success;
  };

  // ****************************
  // form errors and succes functions
  const clearError = (label, input, emptyMessage, formatMessage) => {
    setTimeout(() => {
      label.style.color = "var(--clr-dark-2)";
      input.style.border = "1px solid var(--clr-light-5)";

      emptyMessage ? (emptyMessage.style.display = "none") : "";

      formatMessage ? (formatMessage.style.display = "none") : "";
    }, 10000);

    setTimeout(() => {
      setError(false);
    }, 2500);
  };

  const emptyInputError = (
    label,
    input,
    emptyMessage,
    formatMessage,
    success
  ) => {
    label.style.color = "var(--clr-danger-1)";
    input.style.border = "1px solid var(--clr-danger-1)";

    emptyMessage ? (emptyMessage.style.display = "flex") : "";

    formatMessage ? (formatMessage.style.display = "none") : "";

    success = false;

    setError(true);

    throw new Error("empty value");
  };

  const formatInputError = (label, input, formatMessage, success) => {
    label.style.color = "var(--clr-danger-1)";
    input.style.border = "1px solid var(--clr-danger-1)";
    formatMessage ? (formatMessage.style.display = "flex") : "";

    success = false;

    setError(true);

    throw new Error("wrong format");
  };

  const formSubmited = () => {
    setError(false);
    setPurshaseCompleted(true);
    setCart([]);
    localStorage.setItem("Cart", JSON.stringify([]));
    setCartOpen(false);
  };

  const backHome = () => {
    setPurshaseCompleted(false);

    setBillingData({
      name: "",
      email: "",
      phone: "",
    });

    setShippingData({
      address: "",
      zip_code: "",
      city: "",
      country: "",
    });

    setPaymentData({
      e_money_number: "",
      e_money_pin: "",
    });
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
        purshaseCompleted,
        billingData,
        setBillingData,
        BillingFormRef,
        shippingData,
        setShippingData,
        ShippingFormRef,
        shippingForm,
        paymentData,
        setPaymentData,
        PaymentFormRef,
        formSubmit,
        setPurshaseCompleted,
        backHome,
        error,
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
