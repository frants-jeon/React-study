import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <div className={classes.form}>
      {props.children}
      <button onClick={props.onSubmit}>+Add</button>
    </div>
  );
};
export default MealItemForm;
