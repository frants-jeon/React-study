import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "물티슈",
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "치킨", amount: 20000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "책",
    amount: 12000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "충전케이블",
    amount: 3000,
    date: new Date(2022, 3, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
