import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const addFoodHandler = () => {
    props.onAdd(props.key, props.name, props.price);
  };
  const removeFoodHandler = () => {
    props.onRemove(props.name, props.price);
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
