import classes from "./Input.module.css";
const Input = (props) => {
  // const amountHandler = (event) => {
  //   props.onChange(event.target.value);
  // };

  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input {...props.input} ref={props.inputRef} />
    </div>
  );
};
export default Input;
