import React, { useState, useContext } from "react";

const CartContext = React.createContext({
  cartList: {},
  total: { amount: 0, price: 0 },
  addFood: (id, foodName, amount, foodPrice) => {},
  removeFood: (foodName) => {},
});

export const CartContextProvider = (props) => {
  const [cartList, setCartList] = useState({});
  const [total, setTotal] = useState({ amount: 0, price: 0 });
  useContext(CartContext);

  const addFood = (id, foodName, amount, foodPrice) => {
    setTotal((prevTotal) => {
      const newAmount = prevTotal.amount + amount;
      const newPrice = prevTotal.price + foodPrice;
      return { amount: newAmount, price: newPrice };
    });
    setCartList((prevList) => {
      const result = { ...prevList };
      if (foodName in prevList) {
        result[foodName].amount += +amount;
      } else {
        result[foodName] = { id, amount, price: foodPrice };
      }
      return result;
    });
  };
  const removeFood = (foodName, foodPrice) => {
    setTotal((prevTotal) => {
      const newAmount = prevTotal.amount - 1;
      const newPrice = prevTotal.price - foodPrice;
      return { amount: newAmount, price: newPrice };
    });
    setCartList((prevList) => {
      const result = { ...prevList };
      if (prevList[foodName].amount > 1) {
        result[foodName].amount -= 1;
        return result;
      }
      delete result[foodName];
      return result;
    });
  };

  return (
    <CartContext.Provider value={{ cartList, addFood, removeFood, total }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
