import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;
    cartCtx.addFood(props.id, props.name, enteredAmount, +props.price);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        inputRef={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        // onChange={amountChangeHandler}
        // value={enteredAmount}
      />
      <button onClick={props.onSubmit}>+Add</button>
    </form>
  );
};
export default MealItemForm;
