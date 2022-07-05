import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  const allInputIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!allInputIsValid) return;
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`control-group`}>
        <div className={`form-control ${firstNameHasError && "invalid"}`}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={`form-control ${lastNameHasError && "invalid"}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">E-mail must have '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!allInputIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
