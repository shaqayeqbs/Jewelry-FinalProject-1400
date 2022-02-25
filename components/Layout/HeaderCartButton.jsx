import CartIcon from "../Icon/CartIcon";
import classes from "./HeaderCart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
