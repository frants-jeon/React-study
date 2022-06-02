import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  };

  const changeEditingStateHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={changeEditingStateHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onChangeEditingState={changeEditingStateHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
