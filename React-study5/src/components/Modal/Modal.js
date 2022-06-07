import { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartItem from "../Cart/CartItem";
import Card from "../UI/Card/Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const cartCtx = useContext(CartContext);
  const addFoodHandler = (id, foodName, foodPrice) => {
    cartCtx.addFood(id, foodName, 1, +foodPrice);
  };
  const removeFoodHandler = (foodName) => {
    cartCtx.removeFood(foodName);
  };
  return (
    <>
      <div className={classes.backdrop} onClick={props.isActive}></div>
      <Card className={classes.modal}>
        {Object.keys(cartCtx.cartList).map((food) => (
          <CartItem
            key={cartCtx.cartList[food].id}
            name={food}
            amount={cartCtx.cartList[food].amount}
            price={cartCtx.cartList[food].price}
            onAdd={addFoodHandler}
            onRemove={removeFoodHandler}
          ></CartItem>
        ))}
        <div className={classes.total}>
          <h2>Total Amount</h2>
          <h2>${cartCtx.total.price}</h2>
        </div>
        <button onClick={props.isActive}>Close</button>
        <button onClick={props.isActive}>Order</button>
      </Card>
    </>
  );
};
export default Modal;
