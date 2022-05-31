import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState();
  // const [enteredAmount, setEnteredAmount] = useState();
  // const [enteredDate, setEnteredDate] = useState();
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: event.target.value,
    }));
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: new Date(event.target.value),
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput((prevState) => {
      const newState = {};
      for (const key in prevState) {
        newState[key] = "";
      }
      return newState;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {`${userInput.enteredTitle} \n ${userInput.enteredAmount} \n ${userInput.enteredDate}`}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
