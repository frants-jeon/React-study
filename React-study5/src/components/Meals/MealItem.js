import { useState, useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Input from "./Input";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);

  const cartCtx = useContext(CartContext);

  const amountChangeHandler = (amount) => {
    setEnteredAmount(amount);
  };
  const submitHandler = () => {
    cartCtx.addFood(props.id, props.name, +enteredAmount, +props.price);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <MealItemForm onSubmit={submitHandler}>
        <Input
          type="number"
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
      </MealItemForm>
    </li>
  );
};
export default MealItem;
