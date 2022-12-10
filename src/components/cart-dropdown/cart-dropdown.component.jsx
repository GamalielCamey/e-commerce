import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <h3>Producto</h3>
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
