import classes from "./Input.module.css";
const Input = (props) => {
  const amountHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input type={props.type} value={props.value} onChange={amountHandler} />
    </div>
  );
};
export default Input;
