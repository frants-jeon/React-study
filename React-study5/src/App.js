import React, { useContext } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Summary/MealsSummary";
import CartContext from "./store/cart-context";

const App = () => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      {cartCtx.cartIsShown && <Cart />}
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default App;
