import {UserContext} from "../../contexts/user.context";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {CartContext} from "../../contexts/cart.contexts";
import {useContext} from "react";

const CartIcon = () => {
  const {toggle, setToggle} = useContext(CartContext);

  const toggleCart = () => {
    setToggle(!toggle);
  };

  return (
    <div onClick={toggleCart} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">12</span>
    </div>
  );
};

export default CartIcon;
