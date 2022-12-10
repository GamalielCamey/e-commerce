import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {CartContext} from "../../contexts/cart.contexts";
import {useContext} from "react";

const CartIcon = () => {
  const {toggle, setToggle, cartCount} = useContext(CartContext);

  const toggleCart = () => {
    setToggle(!toggle);
  };

  return (
    <div onClick={toggleCart} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
