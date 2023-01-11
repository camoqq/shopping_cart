import React, { createContext, useState } from "react";

export const CartContext = createContext();

const ContextComp = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextComp;
