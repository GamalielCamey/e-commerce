import {createContext, useState} from "react";

export const CartContext = createContext({
  toogle: false,
  setToogle: () => {},
});

export const CartProvider = ({children}) => {
  const [toggle, setToggle] = useState(false);
  const value = {toggle, setToggle};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
