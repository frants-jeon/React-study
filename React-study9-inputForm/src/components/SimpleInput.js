import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = enteredInput.trim() !== "";

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setInputTouched(true);

    if (!inputIsValid) return;
    console.log(enteredInput);
    setEnteredInput("");
    setInputTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`form-control ${
          inputTouched && !inputIsValid ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={enteredInput}
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
        {inputTouched && !inputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
