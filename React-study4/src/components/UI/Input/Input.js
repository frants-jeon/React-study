import classes from "./Input.module.css";

const Input = (props) => {
  const inputChangeHandler = (event) => {
    props.onChange(event);
  };

  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.state.value}
        onChange={inputChangeHandler}
        onBlur={props.onBlur}
      />
    </div>
  );
};
export default Input;
