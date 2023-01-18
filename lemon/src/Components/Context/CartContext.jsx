import React, { createContext, useState } from "react";

export const cartContextWrap = createContext();

function CartContext({ children }) {
  const [cart, setcart] = useState(0);
  const context = {
    cart: cart,
    setcart: setcart,
  };
  return (
    <cartContextWrap.Provider value={context}>
      {children}
    </cartContextWrap.Provider>
  );
}

export default CartContext;
