import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./InputBox.module.css";

const InputBox = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const saveEnteredName = (event) => {
    setEnteredName(event.target.value);
  };
  const saveEnteredAge = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = () => {
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
      age: Number(enteredAge),
    });
    setEnteredName("");
    setEnteredAge("");
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          id="username"
          type="text"
          onChange={saveEnteredName}
          value={enteredName}
        ></input>
        <label htmlFor="age" className={styles.label}>
          Age (Years)
        </label>
        <input
          id="age"
          type="number"
          onChange={saveEnteredAge}
          value={enteredAge}
        ></input>
      </form>
      <Button type="button" onClick={submitHandler}>
        Add User
      </Button>
    </Card>
  );
};
export default InputBox;
