import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./Filter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterChangeHandler = (selectedYearFromFilter) => {
    setSelectedYear(selectedYearFromFilter);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        defaultYear={selectedYear}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
