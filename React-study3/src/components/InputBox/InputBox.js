import { useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./InputBox.module.css";

const InputBox = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = () => {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.onError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (enteredAge < 1 || enteredAge > 200) {
      props.onError({
        title: "Invalid age",
        message: "Please enter a valid age (0 < age < 200).",
      });
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      userName: enteredName,
      age: +enteredAge,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input id="username" type="text" ref={nameInputRef}></input>
        <label htmlFor="age" className={styles.label}>
          Age (Years)
        </label>
        <input id="age" type="number" ref={ageInputRef}></input>
      </form>
      <Button type="button" onClick={submitHandler}>
        Add User
      </Button>
    </Card>
  );
};
export default InputBox;
