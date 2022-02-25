import MainNavigation from "./main-navigation";
import classes from "./layout.module.css";
import React from "react";
import Cart from "../cart/cart";
import { useState } from "react";
import CartProvider from "../store/CartProvider";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <MainNavigation
        onShowCart={showCartHandler}
        onHideCart={hideCartHandler}
      />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </CartProvider>
  );
};

export default Layout;
