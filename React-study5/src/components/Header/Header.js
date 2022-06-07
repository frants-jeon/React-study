import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <div className={classes.header}>
        ReactMeals
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="meals"
        />
      </div>
    </div>
  );
};
export default Header;
