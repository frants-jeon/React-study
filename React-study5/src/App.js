import React from "react";

import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Summary/MealsSummary";

const App = () => {
  return (
    <>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default App;
