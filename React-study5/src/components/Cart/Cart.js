import { useContext } from "react";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = Object.keys(cartCtx.cartList).map((food) => (
    <CartItem
      key={cartCtx.cartList[food].id}
      id={cartCtx.cartList[food].id}
      name={food}
      amount={cartCtx.cartList[food].amount}
      price={cartCtx.cartList[food].price}
    ></CartItem>
  ));
  const hasItems = cartItems.length > 0;

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.total.price}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={cartCtx.cartOnOffHandler}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
