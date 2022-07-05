import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  const inputIsAllValid = nameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(enteredEmail);
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameInputHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={enteredName}
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={`form-control ${emailInputHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="email"
          value={enteredEmail}
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must be include '@'</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!inputIsAllValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
