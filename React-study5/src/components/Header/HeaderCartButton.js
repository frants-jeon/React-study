import { useState, useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/Icon/CartIcon";
import Modal from "../Modal/Modal";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [activeModal, setActiveModal] = useState(false);
  const modalActiveHandler = () => {
    setActiveModal(!activeModal);
  };

  return (
    <>
      {activeModal && <Modal isActive={modalActiveHandler} />}
      <button
        className={`${classes.button} ${classes.bump}`}
        onClick={modalActiveHandler}
      >
        <CartIcon />
        Your Cart
        <div className={classes.badge}>{cartCtx.total.amount}</div>
      </button>
    </>
  );
};
export default HeaderCartButton;
