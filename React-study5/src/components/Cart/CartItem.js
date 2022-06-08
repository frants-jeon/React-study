import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addFoodHandler = () => {
    cartCtx.addFood(props.id, props.name, 1, props.price);
  };
  const removeFoodHandler = () => {
    cartCtx.removeFood(props.name, props.price);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeFoodHandler}>−</button>
        <button onClick={addFoodHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
