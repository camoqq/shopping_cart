import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "./ContextComp";
import data from "./data";
import Main from "./Main";

function App() {
  const products = data;
  const { cart, setCart } = useContext(CartContext);

  const onAdd = (item) => {
    const prodExist = cart.find((prod) => prod.id === item.id);
    if (prodExist) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id ? { ...prodExist, qty: prodExist.qty + 1 } : prod
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const onRemove = (item) => {
    const prodExist = cart.find((prod) => prod.id === item.id);
    if (prodExist.qty === 1) {
      setCart(cart.filter((prod) => prod.id !== item.id));
    } else {
      setCart(
        cart.map((prod) =>
          prod.id === item.id ? { ...prodExist, qty: prodExist.qty - 1 } : prod
        )
      );
    }
  };

  const del = (item) => {
    setCart(cart.filter((x) => x.id !== item.id));
  };

  return (
    <div>
      <Main products={products} onAdd={onAdd} />
      <Cart onAdd={onAdd} onRemove={onRemove} del={del}></Cart>
    </div>
  );
}

export default App;
