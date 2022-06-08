import { useState, useContext, useEffect } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/Icon/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);
  const [btnBump, setBtnBump] = useState(false);

  const btnClasses = `${classes.button} ${btnBump && classes.bump}`;

  useEffect(() => {
    if (cartCtx.total.amount === 0) return;
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, [cartCtx.total.amount]);

  return (
    <button className={btnClasses} onClick={cartCtx.cartOnOffHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.total.amount}</span>
    </button>
  );
};
export default HeaderCartButton;
